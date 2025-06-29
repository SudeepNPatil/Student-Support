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
import { data } from "../data/E-commerce_collection";



export default function Project() {

    const [stretch, setstretch] = useState(false)

    const [isOpen, setIsopen] = useState(false)

    return (
        <>
            <Navbar />
            <div className="hidden inset-0 sm:flex flex-col">
                <div className="inset-0 hidden sm:flex flex-row flex-wrap pt-20 mb-4 sm:mb-10 border">
                    <div className="sm:w-[20%] bg-green-50 sm:flex flex-col items-center border-r">
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
                        <div className="flex justify-evenly gap-16  h-20 border-b items-center right-0">

                            <div className="flex flex-row">
                                <BsSearch size={20} className="-mr-8 self-center z-10 cursor-pointer" />
                                <input type="text" name="text" id="some" className="h-10 w-80 border rounded-md pl-12" placeholder="Search..." />
                            </div>

                            <BsCart2 className="w-7 h-7 cursor-pointer" />
                            <FaRegHeart className="w-7 h-7 cursor-pointer" />

                            <img src={trackorder} alt="track_order" className="w-8 h-8 cursor-pointer" />
                        </div>

                        <div className="flex flex-row flex-wrap gap-10 py-10 justify-center max-h-screen overflow-y-scroll scroll-smooth no-scrollbar">

                            {data.map((item, index) => (
                                <div key={index} className="w-52 rounded-2xl shadow-lg cursor-pointer hover:scale-95 duration-500 ease-in-out">
                                    <img src={`${item.image_url}`} alt={`${item.title}`} className="w-fit object-cover rounded-2xl" />
                                    <div className="px-4 py-3 text-sm">
                                        <h1 className="text-base font-semibold truncate">{item.title}</h1>
                                        <p className="truncate">{item.Category_Badge}</p>
                                        <p className="truncate">{item.Tech_Stack_Badges.join(" ,")}</p>
                                    </div>
                                </div>
                            ))

                            }


                        </div>

                    </div>

                </div>




                <Footer />
            </div>


            {/* for mobile design */}

            <div className="sm:hidden w-screen h-screen pt-20 " onClick={(e) => { e.stopPropagation(), setstretch(false) }}>
                <div className="flex justify-between items-center gap-4 pl-5 pr-5 pt-5 pb-3" >


                    <button className="w-2/3 min-w-[50px] max-w-[110px] h-8 border text-sm opacity-85 rounded-lg text-center bg-green-100" onClick={(e) => { e.stopPropagation(), setstretch(true) }}>Category<IoArrowForwardCircleOutline size={14} className="inline-block ml-0.5" /></button>


                    <BsSearch size={15} className="-mr-10 ml-2 z-0 self-center flex-shrink-0" />

                    <input
                        type="text"
                        name="text"
                        id="text"
                        className="pl-8 border rounded-md h-8 w-2/3"
                        placeholder="Search..."
                    />


                    <IoArrowBackCircleOutline size={35} onClick={(e) => { e.stopPropagation(), setIsopen(true) }} />
                    <div className={`bg-green-50 rounded-md h-full fixed right-0 top-24 w-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <IoArrowForwardCircleOutline size={25} className="m-1" onClick={(e) => { e.stopPropagation(), setIsopen(false) }} />


                        <p className="text-sm mb-2 pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"> <BsCart2 size={30} className="cursor-pointer inline-block p-2" />Cart</p>
                        <p className="text-sm mb-2 pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"> <FaRegHeart size={30} className=" cursor-pointer inline-block p-2" />Wishlist</p>
                        <p className="text-sm mb-5 pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"><img src={trackorder} alt="track_order" className="w-8 h-8 cursor-pointer inline-block p-2" />Order </p>

                    </div>

                </div>


                <div className={`bg-green-50 rounded-xl h-screen w-1/2 absolute left-0 top-24 transform transition-transform duration-300 ease-in-out ${stretch ? 'translate-x-0' : '-translate-x-full'}`}>

                    <MdArrowBackIosNew size={30} className="absolute top-1/2 right-0 border rounded-full p-2" />

                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer  rounded-md bg-gray-200 pt-1 pb-1">E-commerce</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer  rounded-md bg-gray-200 pt-1 pb-1">IOT</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer rounded-md bg-gray-200 pt-1 pb-1">AI/ML</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer  rounded-md bg-gray-200 pt-1 pb-1">Business DashBoards</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer  rounded-md bg-gray-200 pt-1 pb-1">Portfolio</p>
                    <p className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer rounded-md bg-gray-200 pt-1 pb-1">Others</p>

                </div>


                <div className="flex flex-wrap justify-center gap-10 py-7 max-h-screen overflow-y-scroll no-scrollbar">

                    {data.map((item, index) => (
                        <div key={index} className="w-40 flex flex-col flex-wrap justify-center rounded-2xl shadow-xl">
                            <img src={`${item.image_url}`} alt={`${item.title}`} className="w-full object-cover rounded-2xl" />

                            <div className="py-2 px-2 text-[12px] w-40">
                                <h1 className="text-base font-semibold truncate">{item.title}</h1>
                                <p className="truncate">{item.Category_Badge}</p>
                                <p className="truncate">{item.Tech_Stack_Badges.join(" ,")}</p>
                            </div>
                        </div>
                    ))
                    }

                </div>

                <Footer />
            </div>

        </>
    )
}