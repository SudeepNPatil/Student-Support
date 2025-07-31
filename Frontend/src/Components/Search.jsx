import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { WishlistContext } from "../Context/WishlistContext";
import { LoginContext } from "../Context/LoginContext";
import ModalLogin from "../Modals/ModalLogin";

export default function Search() {

    const { Products, searchProduct } = useContext(ProductContext);
    const { WishlistItem, addToWishlist, RemoveWishlistItem } = useContext(WishlistContext);
    const { isLogin } = useContext(LoginContext);
    const [logincheck, setlogincheck] = useState(false)

    if (!Array.isArray(Products) || Products.length === 0) {
        return <div></div>;
    }

    const Productfound = Products.filter(product =>
        product?.title?.toLowerCase().includes(searchProduct?.toLowerCase?.() || "")
    );



    return (
        <div className="flex flex-row my-10 px-10 flex-wrap gap-10 justify-center items-center max-h-screen overflow-y-scroll scroll-smooth no-scrollbar">

            {Productfound.length > 0 ?
                (
                    Productfound.map((item, index) => {

                        const isLiked = WishlistItem.some(wish => wish.projectId === item.projectId)

                        return (
                            <div key={index} className="w-52 rounded-2xl mx-auto shadow-lg cursor-pointer relative hover:scale-95 duration-500 ease-in-out">

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
                                    if (isLogin) {
                                        if (isLiked) {
                                            RemoveWishlistItem(item)
                                        }
                                        else {
                                            addToWishlist(item)
                                        }
                                    } else {
                                        setlogincheck(true);
                                    }
                                }}
                                    className={`text-2xl fixed top-1 right-1 ${isLiked ? "text-red-600" : "text-gray-500"}`} />

                            </div>
                        )
                    })

                ) : (

                    <div className="text-xl sm:text-2xl flex flex-col justify-center items-center min-h-screen">
                        <h1 className="text-gray-700 my-auto">Project Not Found...!☹</h1>
                    </div>

                )

            }

            <ModalLogin isOpen={logincheck} onClose={() => setlogincheck(false)}></ModalLogin>

        </div>
    )
}