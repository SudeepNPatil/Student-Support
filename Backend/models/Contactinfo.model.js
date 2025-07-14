import mongoose from "mongoose";

const Contactinfoschema = mongoose.Schema(
    {
        name: String,
        Email: String,
        service: String,
        Budget: Number,
        text: String,
    },
    {
        timestamps: true
    }
);

const Contactinfo = mongoose.model("Contactinfo", Contactinfoschema);

export default Contactinfo;