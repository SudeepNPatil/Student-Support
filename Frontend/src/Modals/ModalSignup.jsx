import React from "react";
import { RxCross2 } from "react-icons/rx";

const ModalSignup = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative shadow-lg">

                <RxCross2 onClick={onClose} className="absolute right-2 top-2 text-xl cursor-pointer text-gray-500 hover:text-black"></RxCross2>
                {children}
            </div>

        </div>
    )
}

export default ModalSignup;