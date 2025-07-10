import React from "react";
import { Link } from "react-router-dom";

const ModalAccountinfo = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null

    return (
        <div className="absolute  bg-black rounded-sm w-[100vw] h-[100vh] flex flex-col z-50">
            <button onClick={onClose} className="absolute right-2 top-2 text-gray-200 hover:text-black">✖</button>
        </div>
    )
}

export default ModalAccountinfo;