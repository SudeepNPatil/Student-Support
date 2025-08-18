import express from "express";
import Contactinfo from "../models/Contactinfo.model.js";



const router = express.Router()



router.post('/', async (req, res) => {

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
        console.error("/Contactinfo route", error.message);
        res.status(500).json({ message: "server error" });
    }
});

export default router;