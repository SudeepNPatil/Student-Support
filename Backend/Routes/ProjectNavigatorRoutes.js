import express from 'express'
import ProjectNavigator from '../models/ProjectNavigator.model.js'



const router = express.Router();


router.post('/', async (req, res) => {

    const { name, date, time, language } = req.body;

    try {

        const newProjectNavigator = new ProjectNavigator({
            name,
            date,
            time,
            language
        })

        await newProjectNavigator.save();

        res.status(201).json({ message: "We Review your request and will connect with you soon..!" })

    }
    catch (error) {
        console.error("/ProjectNavigator route error", error.message);
        res.status(500).json({ message: "server error" });
    }
})


export default router;