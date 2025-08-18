import express from "express";
import CustomBuildService from '../models/CustomBuildService.model.js'

const router = express.Router();

router.post('/', async (req, res) => {

    const { name, Phnumber, Email, describe } = req.body;

    try {

        const newCustomBuildService = new CustomBuildService({
            name,
            Phnumber,
            Email,
            describe
        })

        await newCustomBuildService.save();

        res.status(201).json({ message: "We Review your request and will connect with you soon..!" })

    }
    catch (error) {
        console.error("/CustomBuildService route error", error.message);
        res.status(500).json({ message: "server error" });
    }
})

export default router;