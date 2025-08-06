import mongoose from "mongoose";

const CustomBuildServiceSchema = mongoose.Schema(
    {
        name: String,
        Phnumber: Number,
        Email: String,
        describe: String
    },
    {
        timestamps: true
    }
);

const CustomBuildService = mongoose.model("CustomBuildService", CustomBuildServiceSchema);

export default CustomBuildService;