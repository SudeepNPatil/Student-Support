import React, { useState } from "react";
import Navbar from "./Navbar";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Track_order from "../assets/Track order.png"
import Footer from "./Footer";


export default function Project() {

    const [stretch, setstretch] = useState(false)




    const searchbar = (
        <div className="relative cursor-auto">
            <input type="text" className="min-w-52 cursor-pointer h-10 border font-semibold opacity-80 rounded-xl" />
            {/*  <BsSearch size={20} className="absolute top-2 " /> */}
        </div>)







    return (
        <>
            <Navbar />
            <div className="inset-0 flex flex-row w-screen min-h-screen pt-20">
                <div className="sm:w-[20%] bg-green-50 flex flex-col items-center">
                    <h2 className="mt-8 font-bold text-xl text-center">Catagories</h2>
                    <hr className="font-bold w-full mt-5" />
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">E-commerce</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">IOT</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">AI/ML</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">Business DashBoards</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">Portfolio</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">Others</p>
                </div>
                <div className="flex-1">
                    <div className="flex justify-end gap-16 pr-16 pt-10 border-b">
                        {

                            stretch ? searchbar : <BsSearch className="w-7 h-7 cursor-pointer" onClick={() => { setstretch(true) }} />

                        }
                        <BsCart2 className="w-7 h-7 cursor-pointer" />
                        <FaRegHeart className="w-7 h-7 cursor-pointer" />
                        <img src={Track_order} alt="track_order" className="w-8 h-8 cursor-pointer" />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}