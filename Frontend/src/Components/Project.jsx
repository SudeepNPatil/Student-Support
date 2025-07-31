import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import { ProductContext } from "../Context/ProductContext";
import { OrderContext } from "../Context/OrderContext";

export default function Project() {

    const { Cartitem } = useContext(CartContext);
    const [stretch, setstretch] = useState(false)
    const { WishlistItem } = useContext(WishlistContext);
    const { setsearchProduct } = useContext(ProductContext);
    const { Order } = useContext(OrderContext);

    const [isOpen, setIsopen] = useState(false)

    return (
        <>
            <div className="hidden inset-0 sm:flex xl:flex-col sm:flex-row flex-wrap">
                <div className="inset-0 hidden sm:flex xl:flex-row sm:flex-col flex-wrap xl:pt-20 sm:pt-20 overflow-x-scroll no-scrollbar">
                    <div className="xl:w-[20%] sm:w-full xl:gap-0 sm:gap-10 xl:px-0 lg:px-12 md:px-8 sm:px-7  overflow-x-scroll no-scrollbar bg-green-50 sm:flex xl:flex-col sm:flex-row items-center xl:border-r xl:pb-20 sm:pb-5">
                        <h2 className="xl:mt-8 sm:mt-5 font-bold text-xl text-center">Catagories</h2>
                        <hr className="hidden xl:block xl:w-full mt-5" />
                        <Link to="/Project/ecommerce" className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">E-commerce</Link>
                        <Link to="/Project/IOT" className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">IOT</Link>
                        <Link to="/Project/AI_ML" className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">AI/ML</Link>
                        <Link to="/Project/business" className="text-center mt-5 border font-semibold opacity-80 sm:min-w-80 xl:min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">Business DashBoards</Link>
                        <Link to="#" className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">Portfolio</Link>
                        <Link to="#" className="text-center mt-5 border font-semibold opacity-80 min-w-52 cursor-pointer pl-8 pr-8 rounded-md bg-gray-200 pt-1 pb-1">Others</Link>
                    </div>
                    <div className="flex-1">
                        <div className="flex xl:px-20 lg:px-12 md:px-10 sm:px-9 sm:justify-between h-20 border-b items-center ">
                            <Link to={`/Project/Search`} className="flex flex-row">
                                <BsSearch size={20} className="-mr-8 self-center z-10 cursor-pointer" />
                                <input onChange={(e) => setsearchProduct(e.target.value)} type="text" name="text" id="some" className="h-10 w-80 border rounded-md pl-12" placeholder="Search..." />
                            </Link>
                            <div className="relative">
                                <Link to={`/Project/Cart`}> <BsCart2 className="w-7 h-7 cursor-pointer" /></Link>
                                {Cartitem.length > 0 ?
                                    <span className="bg-pink-500 text-black font-semibold text-center absolute -top-3 -right-2 rounded-full w-6 h-6">{Cartitem.length}</span>
                                    :
                                    null
                                }
                            </div>
                            <div className="relative">
                                <Link to={`/Project/Wishlist`}> <FaRegHeart className="w-7 h-7 cursor-pointer" /></Link>
                                {WishlistItem.length > 0 ?
                                    <span className="bg-pink-500 text-black font-semibold text-center absolute -top-3 -right-2 rounded-full w-6 h-6">{WishlistItem.length}</span>
                                    :
                                    null
                                }
                            </div>
                            <div className="relative">
                                <Link to={`/Project/Order`}> <BsTruck className="w-7 h-7 cursor-pointer" /></Link>
                                {Order.length > 0 ?
                                    /*  <span className="relative flex size-3">
                                         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                         <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                                     </span> */
                                    <span className="bg-pink-500 text-black font-semibold text-center absolute -top-3 -right-2 rounded-full w-6 h-6">{Order.length}</span>
                                    :
                                    null
                                }
                            </div>
                        </div>

                        <Outlet />

                    </div>

                </div>

            </div>


            {/* for mobile design */}

            <div className="sm:hidden w-screen h-auto pt-20" onClick={(e) => { e.stopPropagation(), setstretch(false) }}>
                <div className="flex justify-between items-center pt-5 pb-3 px-2 gap-2" >

                    <button className="w-2/3 min-w-[50px] max-w-[110px] h-8 border text-sm opacity-85 rounded-lg text-center bg-green-100" onClick={(e) => { e.stopPropagation(), setstretch(true) }}>Category<IoArrowForwardCircleOutline size={14} className="inline-block ml-0.5" /></button>

                    <Link to={`/Project/Search`} className="relative">

                        <BsSearch className="text-sm xss:text-base absolute left-2 top-2" />

                        <input
                            type="text"
                            name="text"
                            id="text"
                            className="pl-8 border rounded-md h-8 w-full"
                            placeholder="Search..."
                            onChange={(e) => setsearchProduct(e.target.value)}
                        />


                    </Link>
                    <div className="relative">
                        <IoArrowBackCircleOutline size={35} onClick={(e) => { e.stopPropagation(), setIsopen(true) }} />
                        {Cartitem.length > 0 || WishlistItem.length > 0 ?
                            <span className="bg-pink-500 text-black font-semibold text-center absolute text-[10px] top-0  rounded-full px-1.5">{Cartitem.length + WishlistItem.length}</span>
                            :
                            null
                        }
                    </div>
                    <div className={`bg-green-50 rounded-md h-full z-10 fixed right-0 top-24 w-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <IoArrowForwardCircleOutline size={25} className="m-1" onClick={(e) => { e.stopPropagation(), setIsopen(false) }} />
                        <div className="relative">
                            <Link to={`/Project/Cart`} className="text-sm mb-2 block pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"> <BsCart2 size={30} className="cursor-pointer inline-block p-2" />Cart</Link>
                            {Cartitem.length > 0 ?
                                <span className="bg-pink-500 text-black font-semibold text-center absolute text-[10px] top-0 left-8  rounded-full px-1.5">{Cartitem.length}</span>
                                :
                                null
                            }
                        </div>
                        <div className="relative">
                            <Link to={`/Project/Wishlist`} className="text-sm block mb-2 pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"> <FaRegHeart size={30} className=" cursor-pointer inline-block p-2" />Wishlist</Link>
                            {WishlistItem.length > 0 ?
                                <span className="bg-pink-500 text-black font-semibold text-center absolute rounded-full text-[10px] top-0 left-8 px-1.5">{WishlistItem.length}</span>
                                :
                                null
                            }
                        </div>

                        <div className="relative">
                            <Link to={`/Project/Order`} className="text-sm mb-5 block pl-5 pr-5 font-bold  hover:bg-gray-100 hover:border rounded-lg opacity-70"><BsTruck size={30} className=" cursor-pointer inline-block p-2" /> Order </Link>
                            {Order.length > 0 ?
                                <span className="bg-pink-500 text-black font-semibold text-center absolute rounded-full text-[10px] top-0 left-8 px-1.5">{Order.length}</span>
                                :
                                null
                            }
                        </div>
                    </div>

                </div>

                <div className={`bg-green-50 flex flex-col z-10 px-10 rounded-xl h-screen w-1/2 absolute left-0 top-24 transform transition-transform duration-300 ease-in-out ${stretch ? 'translate-x-0' : '-translate-x-full'}`}>

                    <MdArrowBackIosNew size={30} className="absolute top-1/2 right-0 border rounded-full p-2" />
                    <Link to={`/Project/ecommerce`} className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer  rounded-md bg-gray-200 pt-1 pb-1">E-commerce</Link>
                    <Link to={`/Project/IOT`} className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer  rounded-md bg-gray-200 pt-1 pb-1">IOT</Link>
                    <Link to={`/Project/AI_ML`} className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer rounded-md bg-gray-200 pt-1 pb-1">AI/ML</Link>
                    <Link to={`/Project/busines`} className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer  rounded-md bg-gray-200 pt-1 pb-1">Business DashBoards</Link>
                    <Link to={`#`} className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer  rounded-md bg-gray-200 pt-1 pb-1">Portfolio</Link>
                    <Link to={`#`} className="text-center mt-5 border font-semibold opacity-80 min-w-20 cursor-pointer rounded-md bg-gray-200 pt-1 pb-1">Others</Link>

                </div>

                <Outlet />

            </div>

        </>
    )
}