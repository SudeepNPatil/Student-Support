import express from "express"
import db from "./db.js"
import User from "./models/User.model.js";
import cors from "cors";
import dotenv from "dotenv"
import Project from "./models/Project.model.js";
import Contactinfo from "./models/Contactinfo.model.js";
import rateLimit from 'express-rate-limit'



dotenv.config();

const app = express();

app.use(cors());


app.use(express.json());


db()

const signupLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: {
        status: 429,
        message: "Too many signup attempts. Please try again after 1 Hour.",
    },
});


app.post("/User", signupLimiter, async (req, res) => {

    const { firstname, lastname, email, password } = req.body;

    console.log(req.body)

    try {
        const newuser = new User({
            firstname,
            lastname,
            email,
            password
        })

        await newuser.save();

        res.status(201).json({ message: "user registered ssuccefully !" })
    }
    catch (error) {
        console.error("Signup error", error.message);
        res.status(500).json({ message: "server error" });
    }

});


app.post('/Contactinfo', async (req, res) => {

    const { name, service, Budget, Email, text } = req.body;

    console.log(req.body)

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

    console.log(req.body)

    try {

        const user = await User.findOne({ email, password });

        if (user) {
            res.status(200).json({ message: "Login successful", user });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


app.get("/Project/:category", async (req, res) => {
    const { category } = req.params;

    console.log(category)

    try {
        const projects = await Project.find({ category });
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Failed to fetch projects" });
    }
});


app.listen(process.env.PORT, () => {
    console.log(`server is running on  http://localhost:${process.env.PORT}`);
})