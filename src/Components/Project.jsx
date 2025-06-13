import React, { useState } from "react";
import Navbar from "./Navbar";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import trackorder from "../assets/Track_order.png"
import Footer from "./Footer";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";


export default function Project() {

    const [stretch, setstretch] = useState(false)

    const [isOpen, setIsopen] = useState(false)


    const searchbar = (
        <div className="relative cursor-auto">
            <input type="text" className="min-w-52 cursor-pointer h-10 border font-semibold opacity-80 rounded-xl" />
            {/*  <BsSearch size={20} className="absolute top-2 " /> */}
        </div>)


    return (
        <>
            <Navbar />
            <div className="inset-0 hidden sm:flex flex-row w-screen min-h-screen pt-20 mb-4 sm:mb-10">
                <div className="sm:w-[20%] bg-green-50 sm:flex flex-col items-center">
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
                        <img src={trackorder} alt="track_order" className="w-8 h-8 cursor-pointer" />
                    </div>

                </div>
            </div>

            {/* for mobile design */}

            <div className="sm:hidden w-screen h-screen pt-20 " onClick={(e) => { e.stopPropagation(), setstretch(false) }}>
                <div className="flex justify-between items-center gap-4 pl-5 pr-5 pt-5" >


                    <button className="w-1/3 h-8 border rounded-lg text-center bg-green-100" onClick={(e) => { e.stopPropagation(), setstretch(true) }}>Category   <IoArrowForwardCircleOutline size={14} className="inline-block" /></button>

                    <div className="inline-flex items-center gap-2 p-1 border rounded-lg">
                        <BsSearch className="w-4 h-4 shrink-0 opacity-75" />
                        <input
                            type="text"
                            name="text"
                            id="text"
                            className="h-6 outline-none text-sm p-0"
                            placeholder="Search..."
                        />
                    </div>

                    <IoArrowBackCircleOutline className="h-[8%] w-[8%]" onClick={(e) => { e.stopPropagation(), setIsopen(true) }} />
                    <div className={`bg-green-50 rounded-md h-full fixed right-0 top-36 w-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <IoArrowForwardCircleOutline size={25} className="m-1" onClick={(e) => { e.stopPropagation(), setIsopen(false) }} />


                        <p className="text-sm mb-2 pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"> <BsCart2 size={30} className="cursor-pointer inline-block p-2" />Cart</p>
                        <p className="text-sm mb-2 pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"> <FaRegHeart size={30} className=" cursor-pointer inline-block p-2" />Wishlist</p>
                        <p className="text-sm mb-5 pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"><img src={trackorder} alt="track_order" className="w-8 h-8 cursor-pointer inline-block p-2" />Order </p>

                    </div>

                </div>


                <div className={`bg-green-50 rounded-xl h-screen w-1/2 absolute left-0 top-36 transform transition-transform duration-300 ease-in-out ${stretch ? 'translate-x-0' : '-translate-x-full'}`}>

                    <MdArrowBackIosNew size={30} className="absolute top-1/2 right-0 border rounded-full p-2" />

                </div>




            </div>



            {/*  <Footer /> */}
        </>
    )
}