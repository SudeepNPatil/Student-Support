import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Modalmain = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null

    const logout = async () => {
        await fetch("https://student-support-s0xt.onrender.com/logout", {
            credentials: "include"
        }).then(data => data.json()).then(data => console.log(data));

    };

    return (
        <div className="fixed top-[79px] left-[79vw] border  inset-0 bg-white rounded-sm w-[20vw] flex flex-col z-50">
            <RxCross2 onClick={onClose} className="absolute right-2 top-2 text-xl text-gray-700 cursor-pointer hover:text-black"></RxCross2>

            <Link to={`#`} className="px-6 py-2 font-semibold opacity-80 hover:bg-gray-200 rounded-xl  mt-10">Account info</Link>

            <Link to={`#`} className="px-6  py-2 font-semibold opacity-80 hover:bg-gray-200 rounded-xl  mt-2">Your Orders</Link>

            <Link onClick={logout} className="px-6  py-2 font-semibold opacity-80 hover:bg-gray-200 rounded-xl  mt-2">Logout</Link>


        </div>
    )
}

export default Modalmain;