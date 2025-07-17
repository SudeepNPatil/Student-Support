import React from "react";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";


export default function Cart() {

    const { Cartitem } = useContext(CartContext);

    return (
        <>
            {Cartitem != null ?
                <div className="flex flex-col gap-10 mt-10">
                    {Cartitem.map((item, intex) => (
                        <div className="flex flex-row shadow-md hover:scale-y-105 cursor-pointer duration-500 ease-in-out rounded-lg w-3/4 mx-auto justify-between">
                            <img src={item.image_url} alt={item.title} className="w-40 h-fit object-cover  rounded-lg" />
                            <div className="flex flex-col mr-44 gap-2 text-gray-700 mt-1">
                                <h1 className="text-xl font-semibold text-gray-900">{item.title}</h1>
                                <p>{item.Category_Badge}</p>
                                <p>{item.Tech_Stack_Badges.join(" ,")}</p>
                            </div>
                            <div className="flex flex-col justify-between items-center py-2 px-2">
                                <p className="text-xl font-semibold text-gray-950 mt-2">$ 650</p>
                                <button className="text-center h-10 px-5 rounded-md bg-red-500">Remove</button>
                            </div>
                        </div>
                    ))

                    }
                </div>
                :
                <div className="flex flex-col items-center pt-40">

                    <LiaCartArrowDownSolid size={100} className="opacity-75 " />

                    <p className="mt-2 text-base text-gray-700">Your cart is empty</p>

                    <button className="h-10 mt-4 w-60 bg-black text-white text-center rounded-md">Go to project</button>

                </div>
            }
        </>
    )
}