import express from 'express'
import DebugAndRescue from '../models/DebugAndRescue.model.js'
import multer from "multer";


const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single("screenshots"), async (req, res) => {

    const { name, whatsapp, describe } = req.body;

    try {

        const newDebugAndRescue = new DebugAndRescue({
            name,
            whatsapp,
            describe,
            screenshots: {
                data: req.file.buffer,
                contentType: req.file.mimetype,
                size: req.file.size,
                fileName: req.file.originalname
            }
        })

        const saveddata = await newDebugAndRescue.save();

        res.status(201).json({ message: "We Review your request and will connect with you soon..!", data: saveddata })

    }
    catch (error) {
        console.error("/DebugAndRescue route error", error.message);
        res.status(500).json({ message: "server error" });
    }
})


export default router;