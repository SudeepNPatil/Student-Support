import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    image_url: String,
    title: String,
    Category_Badge: String,
    Tech_Stack_Badges: [String],
    category: String
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
