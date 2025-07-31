import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ModalLogin = ({ isOpen, onClose }) => {

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center z-50">
            <div className="bg-white rounded-xl p-6  relative shadow-lg">

                <RxCross2 onClick={onClose} className="absolute right-2 top-2 text-xl cursor-pointer text-gray-500 hover:text-black"></RxCross2>

                <div className="flex flex-col px-2">

                    <h1 className="text-black opacity-75 font-bold text-xl text-center">Login Please..!</h1>

                    <p className="text-gray-700 text-base">Please login to add Project to your Wishlist...☺</p>

                    <Link to={`/Login`} className="py-2 px-2 block text-center border rounded-lg hover:bg-black hover:text-white">Go to Login</Link>

                </div>

            </div>
        </div>
    )
}

export default ModalLogin;