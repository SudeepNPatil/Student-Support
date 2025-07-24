import express from "express"
import db from "./db.js"
import User from "./models/User.model.js";
import cors from "cors";
import dotenv from "dotenv"
import Project from "./models/Project.model.js";
import Contactinfo from "./models/Contactinfo.model.js";
import rateLimit from 'express-rate-limit'
import Admin from "./models/Admin.model.js";
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const allowedOrigins = ["https://student-sup.netlify.app/"];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, false);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Blocked by CORS"));
        }
    }, credentials: true
}));
app.use(express.json());
app.use(cookieParser());

db()

const signupLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 3,
    message: {
        status: 429,
        message: "Too many signup attempts. Please try again after 1 Hour.",
    },
});

const createToken = (email) => {
    return jwt.sign({ email: email }, "secret_Code", { expiresIn: "15d" });
}


app.post("/User", signupLimiter, async (req, res) => {

    const { firstname, lastname, email, password } = req.body;

    try {
        const newuser = new User({
            firstname,
            lastname,
            email,
            password
        })

        await newuser.save();

        const token = createToken(email);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 15 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({ message: "user registered ssuccefully !" })
    }
    catch (error) {
        console.error("Signup error", error.message);
        res.status(500).json({ message: "server error" });
    }

});


app.post('/Contactinfo', async (req, res) => {

    const { name, service, Budget, Email, text } = req.body;

    try {

        const newcontactinfo = new Contactinfo({
            name,
            Email,
            service,
            Budget,
            text
        })

        await newcontactinfo.save();

        res.status(201).json({ message: "We Review your request and will connect with you soon..!" })

    }
    catch (error) {
        console.error("Signup error", error.message);
        res.status(500).json({ message: "server error" });
    }
})


app.post('/login', async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email, password });

        if (user) {

            const token = createToken(email);
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                maxAge: 15 * 24 * 60 * 60 * 1000
            })

            res.status(200).json({ message: "Login successful", user });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

app.post('/cart', async (req, res) => {

    try {
        const { email, projectId } = req.body;

        if (!email || !projectId) {
            return res.status(400).json({ message: "Email and projectId are required." });
        }

        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $addToSet: { cart: projectId } }, // prevents duplicate projectId
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." });
        }

        return res.status(200).json({ message: "Added to cart successfully", cart: updatedUser.cart });
    } catch (err) {
        console.error("Error in /cart route:", err);
        res.status(500).json({ message: "Server error" });
    }

});

app.post("/cart/remove", async (req, res) => {
    const { email, projectId } = req.body;

    if (!email || !projectId) {
        return res.status(400).json({ message: "Email and projectId are required" });
    }

    try {

        const user = await User.findOneAndUpdate(
            { email },
            { $pull: { cart: projectId } },
            { new: true }
        );

        if (!user) return res.status(404).json({ message: "User not found" });


        const cartProjectIds = (user.cart || []).map(id => Number(id));
        const cartProjects = await Project.find({ projectId: { $in: cartProjectIds } });

        const updatedUser = {
            ...user._doc,
            cartdetails: cartProjects
        };

        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
});


app.get("/me", async (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Not logged in" });

    try {
        const decoded = jwt.verify(token, "secret_Code");
        const user = await User.findOne({ email: decoded.email });
        if (!user) return res.status(401).json({ message: "Invalid token" });

        const cartProjectIds = (user.cart || []).map(id => Number(id));

        const cartProjects = await Project.find({
            projectId: { $in: cartProjectIds }
        });

        const userData = {
            ...user._doc,
            cartdetails: cartProjects
        };

        res.json(userData);
    } catch (err) {
        res.status(401).json({ message: "Token invalid" });
    }
});

app.get("/logout", (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "None",
        secure: true
    });
    res.json({ message: "Logged out" });
});


app.post('/admin', async (req, res) => {

    const { name, password } = req.body;

    try {

        const dbres = await Admin.findOne({ name, password });

        if (dbres) {
            res.status(200).json({ message: "Login successful", dbres });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


app.get("/Project/:category/:projectId", async (req, res) => {
    const { category, projectId } = req.params;

    const origin = req.headers.origin;
    if (origin !== "https://student-sup.netlify.app/") {
        return res.status(403).json({ message: "Access Denied" });
    }

    try {
        const projects = await Project.findOne({ category, projectId: Number(projectId) });
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Failed to fetch projects" });
    }
});


app.get("/Project/:category", async (req, res) => {
    const { category } = req.params;

    const origin = req.headers.origin;
    if (origin !== "https://student-sup.netlify.app/") {
        return res.status(403).json({ message: "Access Denied" });
    }

    try {
        const projects = await Project.find({ category });
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Failed to fetch projects" });
    }
});

app.get("/Project", async (req, res) => {

    const origin = req.headers.origin;
    if (origin !== "https://student-sup.netlify.app/") {
        return res.status(403).json({ message: "Access Denied" });
    }

    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Failed to fetch projects" });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`server is running on  http://localhost:${process.env.PORT}`);
})