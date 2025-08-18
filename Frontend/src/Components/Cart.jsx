import React, { useState } from "react";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import { OrderContext } from "../Context/OrderContext";
import ModalConfirmOrder from "../Modals/ModalConfirmOrder";



export default function Cart() {

    const { Cartitem, RemoveCartItem, clearcart } = useContext(CartContext);
    const { addToOrder } = useContext(OrderContext);

    const { data } = useContext(LoginContext);
    const [ConfirmOrder, setConfirmOrder] = useState(false);

    let count = 0

    return (
        <>
            {Cartitem.length > 0 ?
                <div className="flex flex-col gap-10 sm:mt-16 min-h-screen sm:px-8 md:px-20 lg:px-32 xl:px-36 px-3 mt-10 mb-10">
                    {Cartitem.map((item, index) => {

                        count++

                        return (
                            <div key={index} className="flex flex-row shadow-md hover:scale-y-105 cursor-pointer duration-500 ease-in-out rounded-lg justify-between">
                                <img src={item.image_url} alt={item.title} className="w-20 xs:w-24 ls:w-28 sl:w-32 sm:w-40 h-fit object-cover  rounded-lg" />
                                <div className="flex flex-col sm:mr-44 gap-1 sm:gap-2 text-gray-700 mt-1 pl-2">
                                    <h1 className="text-[10px] xss:text-[12px] xs:text-[13px] ls:text-[15px] sl:text-[16px] sm:text-xl font-semibold text-gray-900">{item.title}</h1>
                                    <p className="text-[8px] xss:text-[10px] xs:text-[12px] ls:text-[13px] sl:text-[14px] sm:text-base">{item?.Category_Badge}</p>
                                    <p className="text-[8px] xss:text-[10px] xs:text-[12px] ls:text-[13px] sl:text-[14px] sm:text-base">{item?.Tech_Stack_Badges?.join(" ,")}</p>
                                </div>
                                <div className="flex flex-col justify-between items-center py-2 px-2">
                                    <p className="text-[12px] ls:text-[13px] sl:text-[14px] sm:text-xl font-semibold text-gray-950 sm:mt-2">₹ {item?.projectInfo?.price}</p>
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
                        )
                    })
                    }
                    <div className="flex flex-row justify-end w-full">
                        <h1 className="text-2xl font-serif pr-10"> Total Amount :- </h1>
                        <p className="text-2xl font-serif text-green-600 pr-2"> ₹ {count * 1000}</p>
                    </div>
                    <div className="flex flex-row justify-end gap-5 pr-2">
                        <button onClick={() => (

                            Cartitem.forEach(async (element) => {

                                await fetch('https://student-support-s0xt.onrender.com/cart/remove', {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({ email: data?.email, projectId: element?.projectId })
                                })
                            }),
                            clearcart()
                        )}

                            className="text-center py-2 px-2 w-[25%] bg-black text-white text-balance rounded-lg">Clear Cart</button>
                        <button onClick={() => (

                            setConfirmOrder(true),

                            Cartitem.forEach(async (element) => {

                                await fetch('https://student-support-s0xt.onrender.com/orders', {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({ email: data?.email, projectId: element?.projectId })
                                })
                            })

                        )}

                            className="text-center py-2 px-2 w-[25%] bg-blue-600 text-balance text-white rounded-lg">Order</button>
                    </div>

                    <ModalConfirmOrder isOpen={ConfirmOrder} onClose={() => setConfirmOrder(false)}>
                        <div className="flex flex-col gap-5 justify-center w-96 px-2">
                            <h1 className="text-2xl text-black opacity-75 font-semibold text-center">Confirm Order😍</h1>
                            <p className="text-gray-700 text-base">if you comfirm Your Order Our Person will Cantact you soon to discus about the Project and make the Order Confirm</p>
                            <button onClick={() =>
                            (
                                Cartitem.forEach(async (element) => {

                                    addToOrder(element);
                                    await fetch('https://student-support-s0xt.onrender.com/cart/remove', {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({ email: data?.email, projectId: element?.projectId })
                                    })
                                }),
                                setConfirmOrder(false),
                                clearcart()
                            )}
                                className="py-2 px-2 text-center border rounded-lg hover:bg-black hover:text-white">Confirm Order</button>
                        </div>
                    </ModalConfirmOrder>

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