import React, { useState } from "react";
import useGetProduct from "../Hooks/useGetProduct";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import { OrderContext } from "../Context/OrderContext";
import ModalConfirmOrder from "../Modals/ModalConfirmOrder";
import ModalLogin from "../Modals/ModalLogin";

export default function ProductDetails() {


    const getdata = useGetProduct();

    const { addToCart } = useContext(CartContext);
    const { isLogin, setisLogin, data, setdata } = useContext(LoginContext)
    const { WishlistItem, addToWishlist, RemoveWishlistItem } = useContext(WishlistContext);
    const { addToOrder } = useContext(OrderContext);
    const [ConfirmOrder, setConfirmOrder] = useState(false)
    const [checklogin, setchecklogin] = useState(false)


    const isLiked = WishlistItem?.some((wish) => wish?.projectId === getdata?.projectId);

    const handlecart = async () => {

        addToCart(getdata);

        await fetch('https://student-support-s0xt.onrender.com/cart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: data?.email, projectId: getdata?.projectId })
        })

    }

    const handleorder = async () => {
        setConfirmOrder(true);
    }


    return (
        <div className="relative overflow-hidden">
            <div className="flex flex-col sm:flex-row my-10 sm:gap-16 gap-5 justify-center items-center sm:items-start sm:w-[85%] sm:mx-auto ">
                <div className="relative w-[70%] sm:w-96 rounded-xl">
                    <img src={getdata?.image_url?.split("?")[0] + "?tr=w-auto,h-auto,fo-auto"} alt={getdata?.projectId} className="w-full h-fit object-cover rounded-xl" />
                    <RiHeartAdd2Fill onClick={() => {
                        if (isLogin) {
                            if (isLiked) {
                                RemoveWishlistItem(getdata)
                            } else {
                                addToWishlist(getdata)
                            }
                        } else {
                            setchecklogin(true);
                        }
                    }}
                        className={`text-5xl top-2 absolute right-0 rounded-full bg-[#00000006] ${isLiked ? "text-red-600" : "text-gray-400"}  hover:bg-gray-200 p-3 cursor-pointer`} />
                </div>

                <div className="flex flex-col gap-4 w-[70%]">

                    <h1 className="text-xl font-bold text-gray-800">{getdata?.title}</h1>

                    <div className="">
                        <h1 className="text-lg text-gray-800 font-semibold py-1">Category</h1>
                        <p className="text-base text-gray-700">{getdata?.Category_Badge}</p>
                    </div>
                    <div className="">
                        <h1 className="text-lg text-gray-800 font-semibold py-1">Tech Stack</h1>
                        <p className="text-base text-gray-700">{getdata?.Tech_Stack_Badges?.join(" ,")}</p>
                        <p className="text-sm text-red-400 opacity-90 mt-0.5">( tech stack will vary according to user need )</p>
                    </div>

                    <div>
                        <h1 className="text-lg text-gray-800 font-semibold py-1">Prise</h1>
                        <p className="text-lg text-green-500 font-semibold py-1"> ₹ {getdata?.projectInfo?.price}</p>
                    </div>

                    <div>
                        <h1 className="text-lg text-gray-800 font-semibold py-1">Delivered In</h1>
                        <p className="text-lg text-green-500 font-semibold py-1">{getdata?.projectInfo?.deliveredIn} Days</p>
                    </div>

                    <div>
                        <h1 className="text-lg text-gray-800 font-semibold py-1" >Hosting Service</h1>
                        <p className="text-lg text-green-600">Avaleble</p>
                    </div>
                    {/*  <div>
                    <h1 className="text-lg text-gray-800 font-semibold py-1">Quantity</h1>
                    <div className="flex flex-row flex-wrap">
                        <button onClick={() => qua = getdata.quantity -= 1} className="w-10 h-8 border rounded text-xl text-center block pb-4 font-bold">-</button>
                        <button className="w-10 h-8 border rounded text-base text-center block font-bold">{qua}</button>
                        <button onClick={() => qua = getdata.quantity += 1} className="w-10 h-8 border rounded text-xl text-center block pb-4 font-bold">+</button>
                    </div>
                </div> */}

                    <div>
                        <h1 className="text-lg text-gray-800 font-semibold py-1">Description</h1>
                        <p className="text-base text-gray-700">{getdata?.projectInfo?.description}</p>
                    </div>

                    <div className="flex gap-1 items-center">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <h1 className="text-lg text-gray-800 font-semibold">Full Document</h1>
                        <span className="text-sm text-gray-700">( Optional )</span>
                    </div>

                    <div className="flex sm:gap-10 gap-5  mt-8">
                        <button onClick={handlecart} className="py-2 w-full text-white bg-black cursor-pointer hover:bg-slate-900 rounded-lg">Add to Cart</button>
                        <button onClick={handleorder} className="py-2 w-full text-black rounded-lg cursor-pointer hover:bg-blue-400 border bg-blue-600 font-semibold">Order</button>
                    </div>
                </div>

            </div>

            <div className={`bg-gradient-to-b from-transparent via-white/80 to-white backdrop-blur-sm h-60 w-full absolute bottom-0 transition-transform duration-700 z-30 ease-in-out ${isLogin ? "translate-y-full" : "-translate-y-0"}`}>
                <div className="flex flex-col justify-center gap-5">
                    <p className="text-black text-center mt-10 sm:text-xl font-semibold px-3">Please login to view more about the Project</p>
                    <Link to={`/Login`} className="py-2 px-2 w-fit block mx-auto rounded-lg text-white text-center bg-black">Go to Login</Link>
                </div>
            </div>

            <ModalConfirmOrder isOpen={ConfirmOrder} onClose={() => setConfirmOrder(false)}>
                <div className="flex flex-col gap-5 justify-center w-96 px-2">
                    <h1 className="text-2xl text-black opacity-75 font-semibold text-center">Confirm Order😍</h1>
                    <p className="text-gray-700 text-base">if you comfirm Your Order Our Person will Cantact you soon to discus about the Project and make the Order Confirm</p>
                    <button onClick={() =>
                    (
                        addToOrder(getdata),
                        setConfirmOrder(false)

                    )}
                        className="py-2 px-2 text-center border rounded-lg hover:bg-black hover:text-white">Confirm Order</button>
                </div>
            </ModalConfirmOrder>

            <ModalLogin isOpen={checklogin} onClose={() => setchecklogin(false)}></ModalLogin>

        </div>

    )
}