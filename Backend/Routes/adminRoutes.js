import express from 'express'
import Admin from '../models/Admin.model.js'

const router = express.Router();


router.post('/', async (req, res) => {

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

export default router;