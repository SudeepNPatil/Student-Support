import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";


export default function Wishlist() {

    const { WishlistItem, RemoveWishlistItem } = useContext(WishlistContext);
    const { isLogin, setisLogin, data, setdata } = useContext(LoginContext);

    const { addToCart } = useContext(CartContext);

    return (
        <>
            {WishlistItem.length > 0 ?

                <div className="flex flex-row justify-center items-center flex-wrap mt-14 mb-20 gap-40 px-16">
                    {WishlistItem.map((item, index) => (
                        <div key={index} className="flex flex-col rounded-lg border w-60 relative">
                            <img src={item.image_url} alt={item.title} className="w-full h-full rounded-lg object-cover" />
                            <div className="px-2 py-2 text-gray-700">
                                <p className="text-lg text-gray-950 font-semibold truncate">{item.title}</p>
                                <p className="truncate">{item.Category_Badge}</p>
                                <p className="truncate">{item.Tech_Stack_Badges.join(" ,")}</p>
                            </div>
                            <div className="flex flex-row gap-4 left-1 absolute -bottom-12">
                                <button onClick={() => RemoveWishlistItem(item)} className="h-10 px-6 bg-black font-semibold hover:bg-gray-800 text-white rounded-lg">Remove</button>

                                <button onClick={async () => (
                                    addToCart(item), RemoveWishlistItem(item),
                                    await fetch('https://student-support-s0xt.onrender.com/cart', {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({ email: data?.email, projectId: item?.projectId })
                                    })

                                )}

                                    className="h-10 px-2 font-semibold bg-gray-400 hover:bg-blue-200 rounded-lg">Move to Cart</button>
                            </div>
                        </div>
                    ))

                    }
                </div>

                :
                <div className="flex flex-col items-center justify-center min-h-screen">

                    <FaHandHoldingHeart size={100} className="text-gray-600" />

                    <p className="text-gray-700 mt-2 text-center">Your Wishlist is Empty now</p>

                    <Link to={`/Project/ecommerce`} className="text-white mt-4 block text-center pt-1.5 bg-black h-10 w-60 rounded-md">Go to Project</Link>

                </div>
            }
        </>
    )
}