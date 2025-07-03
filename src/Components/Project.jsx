import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";




export default function Project() {

    const [stretch, setstretch] = useState(false)

    const [isOpen, setIsopen] = useState(false)

    return (
        <>
            <div className="hidden inset-0 sm:flex xl:flex-col sm:flex-row flex-wrap">
                <div className="inset-0 hidden sm:flex xl:flex-row sm:flex-col flex-wrap xl:pt-20 sm:pt-20 overflow-x-scroll no-scrollbar">
                    <div className="xl:w-[20%] sm:w-full xl:gap-0 sm:gap-10 xl:px-0 lg:px-12 md:px-8 sm:px-7  overflow-x-scroll no-scrollbar bg-green-50 sm:flex xl:flex-col sm:flex-row items-center xl:border-r xl:pb-20 sm:pb-5">
                        <h2 className="xl:mt-8 sm:mt-5 font-bold text-xl text-center">Catagories</h2>
                        <hr className="hidden xl:block xl:w-full mt-5" />
                        <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">E-commerce</p>
                        <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">IOT</p>
                        <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">AI/ML</p>
                        <p className="text-center mt-5 border font-semibold opacity-80 sm:min-w-80 xl:min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">Business DashBoards</p>
                        <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">Portfolio</p>
                        <p className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">Others</p>
                    </div>
                    <div className="flex-1">
                        <div className="flex xl:px-20 lg:px-12 md:px-10 sm:px-9 sm:justify-between h-20 border-b items-center ">
                            <div className="flex flex-row">
                                <BsSearch size={20} className="-mr-8 self-center z-10 cursor-pointer" />
                                <input type="text" name="text" id="some" className="h-10 w-80 border rounded-md pl-12" placeholder="Search..." />
                            </div>
                            <Link to={`/Project/Cart`}> <BsCart2 className="w-7 h-7 cursor-pointer" /></Link>
                            <Link to={`/Project/Wishlist`}> <FaRegHeart className="w-7 h-7 cursor-pointer" /></Link>
                            <Link to={`/Project/Order`}> <BsTruck className="w-7 h-7 cursor-pointer" /></Link>
                        </div>

                        <Outlet />

                    </div>

                </div>

            </div>


            {/* for mobile design */}

            <div className="sm:hidden w-screen h-auto pt-20 " onClick={(e) => { e.stopPropagation(), setstretch(false) }}>
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
                        <Link to={`/Project/Cart`} className="text-sm mb-2 block pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"> <BsCart2 size={30} className="cursor-pointer inline-block p-2" />Cart</Link>
                        <Link to={`/Project/Wishlist`} className="text-sm block mb-2 pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"> <FaRegHeart size={30} className=" cursor-pointer inline-block p-2" />Wishlist</Link>
                        <Link to={`/Project/Order`} className="text-sm mb-5 block pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"><BsTruck size={30} className=" cursor-pointer inline-block p-2" /> Order </Link>

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

                <Outlet />

            </div>

        </>
    )
}