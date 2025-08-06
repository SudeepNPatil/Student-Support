import mongoose from "mongoose";

const DebugAndRescueSchema = mongoose.Schema(
    {
        name: String,
        whatsapp: Number,
        describe: String,
    },
    {
        timestamps: true
    }
);

const DebugAndRescue = mongoose.model("DebugAndRescue", DebugAndRescueSchema);

export default DebugAndRescue;