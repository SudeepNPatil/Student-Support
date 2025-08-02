import mongoose from "mongoose";

const ProjectInfoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    deliveredIn: {
        type: Number
    },
    description: {
        type: String
    }
});

const ProjectInfo = mongoose.model("ProjectInfo", ProjectInfoSchema);

export default ProjectInfo;
