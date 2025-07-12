import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const ModalLoading = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-15 flex flex-col justify-center items-center z-30">
            {children}
        </div>
    )
}

export default ModalLoading;