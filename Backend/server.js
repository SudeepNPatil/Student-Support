import express from "express"
import db from "./db.js"
import User from "./models/User.model.js";
import cors from "cors";
import dotenv from "dotenv"



dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


app.use(express.json());


db()

app.post("/User", async (req, res) => {

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

})


app.listen(process.env.PORT, () => {
    console.log(`server is running on  http://localhost:${process.env.PORT}`);
})