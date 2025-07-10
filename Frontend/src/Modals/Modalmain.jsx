import React from "react";
import { Link } from "react-router-dom";

const Modalmain = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null

    return (
        <div className="fixed top-[79px] left-[79vw]  inset-0 bg-white rounded-sm w-[20vw] flex flex-col z-50">
            <button onClick={onClose} className="absolute right-2 top-2 text-gray-200 hover:text-black">✖</button>

            <Link to={`#`} className="px-6 py-2 font-semibold opacity-80 hover:bg-gray-200 rounded-xl  mt-10">Account info</Link>

            <Link to={`#`} className="px-6  py-2 font-semibold opacity-80 hover:bg-gray-200 rounded-xl  mt-2">Your Orders</Link>

            <Link to={`#`} className="px-6  py-2 font-semibold opacity-80 hover:bg-gray-200 rounded-xl  mt-2">Logout</Link>


        </div>
    )
}

export default Modalmain;