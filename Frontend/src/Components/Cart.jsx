import React from "react";

import { LiaCartArrowDownSolid } from "react-icons/lia";

export default function Cart() {
    return (
        <div className="flex flex-col items-center pt-40">

            <LiaCartArrowDownSolid size={100} className="opacity-75 " />

            <p className="mt-2 text-base text-gray-700">Your cart is empty</p>

            <button className="h-10 mt-4 w-60 bg-black text-white text-center rounded-md">Go to project</button>

        </div>
    )
}