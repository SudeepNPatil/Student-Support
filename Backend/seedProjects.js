import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.model.js";
import Iot from "./data/IOT_collection.js";
import AI_ml from "./data/AI_ML_Collection.js";

dotenv.config();

const seedProjects = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("✅ MongoDB connected");


        const IotData = Iot.map(p => ({ ...p, category: "IOT" }));
        const AI_mlData = AI_ml.map(p => ({ ...p, category: "AI_ML" }));


        const allProjects = [...IotData, ...AI_mlData];
        await Project.insertMany(allProjects);

        console.log("🌱 All project data seeded (E-commerce + Business)");
        process.exit();
    } catch (error) {
        console.error("❌ Error seeding project data", error);
        process.exit(1);
    }
};

seedProjects();

