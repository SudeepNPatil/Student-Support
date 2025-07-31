import React, { useState } from "react";
import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import ModalCancelOrder from "../Modals/ModalCancelOrder";
import { TbMoodEmpty } from "react-icons/tb";
import { Link } from "react-router-dom";



export default function OrderTrack() {

    const { Order, RemoveFromOrder } = useContext(OrderContext);

    const [cancelordermodal, setcancelordermodal] = useState(false);
    const [selectedorderid, setselectedorderid] = useState(null);

    const handleCancel = (id) => {
        setselectedorderid(id)
        setcancelordermodal(true);
    }

    const handleyesCancel = () => {
        RemoveFromOrder(selectedorderid);
        setselectedorderid(null);
        setcancelordermodal(false);
    }



    return (
        <>
            {Order.length > 0 ?
                <div className="flex flex-col mx-auto sm:w-11/12 w-screen px-3 my-10 gap-10">
                    {Order.map((item, index) => (
                        <div key={index} className="flex flex-row gap-5 flex-wrap w-screen sm:max-w-fit sm:min-w-[600px] rounded-lg shadow-lg">
                            <div className="bg-gray-900 border h-32">
                                <img src={`${item.image_url}`} alt={`${item.projectId}`} className="h-full w-full object-cover" />

                            </div>
                            <div className="flex flex-col pr-5">
                                <h1 className="text-lg font-semibold">
                                    {item.title}
                                </h1>
                                <p className="text-gray-700">{item?.Category_Badge}</p>
                                <p className="text-gray-700">{item?.Tech_Stack_Badges?.join(" ,")}</p>
                                <div className="flex flex-row gap-5 mt-2">
                                    <button onClick={() => handleCancel(item.projectId)} className="px-2 py-1 rounded-lg text-black border hover:shadow-inner hover:shadow-rose-600 hover:border-red-600">Cancel Order</button>
                                    <button className="px-2 py-1 rounded-lg text-black border hover:shadow-inner hover:shadow-green-600/40 hover:border-green-500">Track Order</button>
                                </div>
                            </div>

                        </div>

                    ))}
                    <ModalCancelOrder isOpen={cancelordermodal} onClose={() => setcancelordermodal(false)}>
                        <h1 className="text-2xl text-red-600 text-center">Alert..!</h1>
                        <p className="text-gray-700 text-center text-lg">Are you sure  do you want to cancel the order</p>
                        <div className="flex flex-row gap-5 justify-center mt-2">
                            <button onClick={() => setcancelordermodal(false)} className="py-1 px-5 rounded-lg border hover:bg-black hover:text-white">keep it</button>
                            <button onClick={handleyesCancel} className="py-1 px-3 rounded-lg border hover:bg-red-700">Yes cancel</button>
                        </div>
                    </ModalCancelOrder>
                </div>
                :
                <div className="flex flex-col items-center justify-center  min-h-screen">

                    <TbMoodEmpty size={100} className="text-gray-700" />
                    <p className="text-center text-gray-700 text-base mt-2">No orderes yet</p>
                    <Link to={`/Project`} className="h-10 mt-4 w-60 bg-black block pt-1.5 text-white text-center rounded-md">Go to project</Link>
                </div>
            }
        </>
    )
}