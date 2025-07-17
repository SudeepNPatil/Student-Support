import React from "react";
import useGetProduct from "../Hooks/useGetProduct";
import { RiHeartAdd2Line } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function ProductDetails() {

    const getdata = useGetProduct();

    const { addToCart } = useContext(CartContext);

    /*   let myimg = getdata?.image_url?.split("?")[0] + "?tr=w-auto,h-auto,fo-auto"; */

    /*  let newmyimg = `${myimg[0]}?tr=w-auto,h-auto,fo-auto` */


    return (
        <div className="flex flex-row my-10 gap-16 justify-center">
            <div className="relative w-96 rounded-xl">
                <img src={getdata?.image_url?.split("?")[0] + "?tr=w-auto,h-auto,fo-auto"} alt={getdata?.projectId} className="w-full h-fit object-cover rounded-xl" />
                <RiHeartAdd2Line className="text-5xl top-2 absolute right-0 rounded-full bg-[#00000006] hover:bg-gray-300 p-3 cursor-pointer" />
            </div>

            <div className="flex flex-col gap-4">

                <h1 className="text-xl font-bold text-gray-800">{getdata?.title}</h1>

                <div className="">
                    <h1 className="text-lg text-gray-800 font-semibold py-1">Category</h1>
                    <p className="text-base text-gray-700">{getdata?.Category_Badge}</p>
                </div>
                <div className="">
                    <h1 className="text-lg text-gray-800 font-semibold py-1">Tech Stack</h1>
                    <p className="text-base text-gray-700">{getdata?.Tech_Stack_Badges?.join(" ,")}</p>
                    <p className="text-sm text-red-400 opacity-90 mt-0.5">( tech stack will vary according to user need )</p>
                </div>

                <div>
                    <h1 className="text-lg text-gray-800 font-semibold py-1">Prise</h1>
                </div>

                <div>
                    <h1 className="text-lg text-gray-800 font-semibold py-1">Delivered In</h1>
                </div>

                <div>
                    <h1 className="text-lg text-gray-800 font-semibold py-1" >Hosting Service</h1>
                </div>

                <div>
                    <h1 className="text-lg text-gray-800 font-semibold py-1">Description</h1>
                    <p className="text-base text-gray-700">some explanation need to add</p>
                </div>

                <div className="flex gap-1 items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                    <h1 className="text-lg text-gray-800 font-semibold">Full Document</h1>
                    <span className="text-sm text-gray-700">( Optional )</span>
                </div>

                <div className="flex gap-10 mt-8">
                    <button onClick={() => addToCart(getdata)} className="py-2 px-16 text-white bg-black cursor-pointer hover:bg-slate-900 rounded-lg">Add to Cart</button>
                    <button className="py-2 px-20 text-black rounded-lg cursor-pointer hover:bg-blue-400 border bg-blue-600 font-semibold">Order</button>
                </div>
            </div>
        </div>
    )
}