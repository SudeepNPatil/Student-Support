import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
        password: String,
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
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);
export default User;