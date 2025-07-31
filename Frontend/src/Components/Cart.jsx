import React from "react";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";



export default function Cart() {

    const { Cartitem, RemoveCartItem } = useContext(CartContext);

    const { data } = useContext(LoginContext);


    return (
        <>
            {Cartitem.length > 0 ?
                <div className="flex flex-col gap-10 sm:mt-16 min-h-screen sm:px-8 md:px-20 lg:px-32 xl:px-36 px-3 mt-10 mb-10">
                    {Cartitem.map((item, index) => (
                        <div key={index} className="flex flex-row shadow-md hover:scale-y-105 cursor-pointer duration-500 ease-in-out rounded-lg justify-between">
                            <img src={item.image_url} alt={item.title} className="w-20 xs:w-24 ls:w-28 sl:w-32 sm:w-40 h-fit object-cover  rounded-lg" />
                            <div className="flex flex-col sm:mr-44 gap-1 sm:gap-2 text-gray-700 mt-1 pl-2">
                                <h1 className="text-[10px] xss:text-[12px] xs:text-[13px] ls:text-[15px] sl:text-[16px] sm:text-xl font-semibold text-gray-900">{item.title}</h1>
                                <p className="text-[8px] xss:text-[10px] xs:text-[12px] ls:text-[13px] sl:text-[14px] sm:text-base">{item?.Category_Badge}</p>
                                <p className="text-[8px] xss:text-[10px] xs:text-[12px] ls:text-[13px] sl:text-[14px] sm:text-base">{item?.Tech_Stack_Badges?.join(" ,")}</p>
                            </div>
                            <div className="flex flex-col justify-between items-center py-2 px-2">
                                <p className="text-[12px] ls:text-[13px] sl:text-[14px] sm:text-xl font-semibold text-gray-950 sm:mt-2">₹ 650</p>
                                <button onClick={async () => {

                                    RemoveCartItem(item)

                                    await fetch('https://student-support-s0xt.onrender.com/cart/remove', {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({ email: data?.email, projectId: item?.projectId })
                                    })

                                }
                                } className="text-center text-[12px] sm:text-base h-8 px-2 sm:h-10 sm:px-5 rounded-md bg-red-500">Remove</button>
                            </div>
                        </div>
                    ))

                    }
                </div>
                :
                <div className="flex flex-col items-center justify-center min-h-screen">

                    <LiaCartArrowDownSolid size={100} className="opacity-75" />

                    <p className="mt-2 text-base text-gray-700">Your cart is empty</p>

                    <Link to={`/Project`} className="h-10 mt-4 w-60 bg-black block pt-1.5 text-white text-center rounded-md">Go to project</Link>

                </div>
            }
        </>
    )
}