import express from 'express'
import Project from "../models/Project.model.js";
import { originCheck } from "../Middleware/originCheck.js"
import ProjectInfo from "../models/projectInfo.model.js"


const router = express.Router();



router.get("/:category/:projectId", originCheck, async (req, res) => {
    const { category, projectId } = req.params;

    try {
        const projects = await Project.findOne({ category, projectId: Number(projectId) });

        if (!projects) {
            return res.status(404).json({ message: "Project not found" });
        }

        const info = await ProjectInfo.findOne({ title: projects.title });

        const combined = {
            ...projects._doc,
            ...(info ? { projectInfo: info._doc } : {})
        };

        res.json(combined);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Failed to fetch projects" });
    }
});


router.get("/:category", originCheck, async (req, res) => {
    const { category } = req.params;


    try {
        const projects = await Project.find({ category });
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Failed to fetch projects" });
    }
});

router.get("/", originCheck, async (req, res) => {


    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ message: "Failed to fetch projects" });
    }
});


export default router;