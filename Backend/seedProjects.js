import mongoose from "mongoose";
import dotenv from "dotenv";
import ProjectInfo from "./models/projectInfo.model.js";
import data from "./data.js"


dotenv.config();

const seedProjects = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("✅ MongoDB connected");

        const formattedData = data.map((item) => ({
            title: item.title,
            price: item.price,
            deliveredIn: item.delivared_in,
            description: item.description,
        }));

        await ProjectInfo.insertMany(formattedData);
        console.log("✅ Project info seeded successfully");

        process.exit(0);

    } catch (error) {
        console.error("❌ Error seeding project data", error);
        process.exit(1);
    }
};

seedProjects();

