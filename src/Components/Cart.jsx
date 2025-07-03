import React from "react";

import { LiaCartArrowDownSolid } from "react-icons/lia";

export default function Cart() {
    return (
        <div className="flex flex-col items-center flex-wrap">

            <LiaCartArrowDownSolid size={50} />

            <p className="mt-10 text-base text-gray-700">your cart is empty</p>

            <button className="h-10 w-60 bg-black text-white text-center rounded-md">Go to project</button>

        </div>
    )
}