import React, { useState } from "react"
import useProductdetails from "../Hooks/useProductdetails"
import Loding from "./Loding";
import { Link } from "react-router-dom";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";


export default function Product() {

    const { WishlistItem, addToWishlist, RemoveWishlistItem } = useContext(WishlistContext);

    const targetdata = useProductdetails();

    if (targetdata.length == 0) {
        return <Loding />
    }

    return (
        <>
            <div className="hidden sm:flex flex-row flex-wrap gap-10 py-10 justify-center max-h-screen overflow-y-scroll scroll-smooth no-scrollbar">

                {targetdata.map((item, index) => {

                    const isLiked = WishlistItem.some((wish) => wish.projectId === item.projectId);

                    return (
                        <div key={index} className="w-52 rounded-2xl shadow-lg cursor-pointer relative hover:scale-95 duration-500 ease-in-out">

                            <div className="w-fit h-fit overflow-hidden relative">
                                <img src={`${item.image_url}`} alt={`${item.title}`} className="w-full h-full object-cover rounded-2xl" />
                                <Link to={`/Project/${item.category}/${item.projectId}`} className="absolute bottom-0 h-44 w-52"></Link>
                            </div>
                            <Link to={`/Project/${item.category}/${item.projectId}`} className="px-4 py-3 text-sm block">
                                <h1 className="text-base font-semibold truncate">{item.title}</h1>
                                <p className="truncate">{item.Category_Badge}</p>
                                <p className="truncate">{item.Tech_Stack_Badges.join(" ,")}</p>
                            </Link>

                            <RiHeartAdd2Fill onClick={() => {
                                if (isLiked) {
                                    RemoveWishlistItem(item)
                                } else {
                                    addToWishlist(item)
                                }
                            }}
                                className={`text-2xl fixed top-1 right-1 ${isLiked ? "text-red-600" : "text-gray-500"}`} />

                        </div>
                    )
                })

                }

            </div>


            <div className="flex flex-wrap justify-center gap-10 py-7 h-[75vh] overflow-y-scroll no-scrollbar sm:hidden">

                {targetdata.map((item, index) => (
                    <div key={index} className="w-40 flex flex-col flex-wrap  justify-center rounded-2xl shadow-xl">
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
        </>
    )
}