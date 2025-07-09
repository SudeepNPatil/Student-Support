import React from "react";

const ModalSignup = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative shadow-lg">

                <button onClick={onClose} className="absolute right-2 top-2 text-gray-200 hover:text-black">✖</button>
                {children}
            </div>

        </div>
    )
}

export default ModalSignup;