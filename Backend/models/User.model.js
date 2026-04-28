import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
        password: String,
        role: String,
        phone: { type: String, default: '' },
        dob: { type: String, default: '' },
        city: { type: String, default: '' },
        state: { type: String, default: '' },
        pincode: { type: String, default: '' },
        username: { type: String, default: '' },
        cart: {
            type: [String],
            default: []
        },
        wishlist: {
            type: [String],
            default: []
        },
        orders: {
            type: [String],
            default: []
        },
    },
    {
        timestamps: true,
        strict: false   
    }
);

const User = mongoose.model("User", UserSchema);
export default User;