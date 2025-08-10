import mongoose from "mongoose";

const DebugAndRescueSchema = mongoose.Schema(
    {
        name: String,
        whatsapp: Number,
        describe: String,
        screenshots: {
            data: Buffer,
            contentType: String,
            size: Number,
            fileName: String
        },
    },
    {
        timestamps: true
    }
);

const DebugAndRescue = mongoose.model("DebugAndRescue", DebugAndRescueSchema);

export default DebugAndRescue;