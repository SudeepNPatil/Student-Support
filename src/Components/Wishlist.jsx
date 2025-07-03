import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function Wishlist() {
    return (
        <div className="flex flex-col flex-wrap items-center pt-40">

            <FaHandHoldingHeart size={50} className="text-gray-600" />

            <p className="text-gray-700 text-center">Your Wishlist is Empty now</p>

            <button className="text-white bg-black h-10 w-60 rounded-md">Go to Project</button>

        </div>
    )
}