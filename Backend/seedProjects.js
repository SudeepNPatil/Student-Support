import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.model.js";
import ecommerceCollection from "./data/E-commerce_collection.js";
import businessCollection from "./data/Business_dashboards.js";

dotenv.config();

const seedProjects = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("✅ MongoDB connected");

        await Project.deleteMany({});
        console.log("🗑️ Old project data deleted");

        const ecommerceData = ecommerceCollection.map(p => ({ ...p, category: "ecommerce" }));
        const businessData = businessCollection.map(p => ({ ...p, category: "business" }));


        const allProjects = [...ecommerceData, ...businessData];
        await Project.insertMany(allProjects);

        console.log("🌱 All project data seeded (E-commerce + Business)");
        process.exit();
    } catch (error) {
        console.error("❌ Error seeding project data", error);
        process.exit(1);
    }
};

seedProjects();
