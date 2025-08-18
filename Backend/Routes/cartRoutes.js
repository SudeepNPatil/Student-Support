import express from 'express'
import Project from '../models/Project.model.js'
import User from '../models/User.model.js'



const router = express.Router();


router.post('/', async (req, res) => {

    try {
        const { email, projectId } = req.body;

        if (!email || !projectId) {
            return res.status(400).json({ message: "Email and projectId are required." });
        }

        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $addToSet: { cart: projectId } }, 
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


router.post("/remove", async (req, res) => {
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

export default router;