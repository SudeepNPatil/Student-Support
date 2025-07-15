import mongoose from "mongoose";

const AdminSchema = mongoose.Schema(
    {
        name: String,
        password: String,
    },
    {
        collection: 'admin',
        timestamps: false
    }
);

const Admin = mongoose.model("Admin", AdminSchema);
export default Admin;