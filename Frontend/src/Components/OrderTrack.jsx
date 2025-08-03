import React, { useState } from "react";
import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import ModalCancelOrder from "../Modals/ModalCancelOrder";
import { TbMoodEmpty } from "react-icons/tb";
import { Link } from "react-router-dom";
import ModalOrderTrack from "../Modals/ModalOrderTrack";



export default function OrderTrack() {

    const { Order, RemoveFromOrder } = useContext(OrderContext);

    const [cancelordermodal, setcancelordermodal] = useState(false);
    const [selectedorderid, setselectedorderid] = useState(null);

    const [trackorder, settrackorder] = useState(false)

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
                <div className="flex flex-col mx-auto sm:w-11/12 w-screen px-3 items-center my-10 gap-10">
                    {Order.map((item, index) => (
                        <div key={index} className="flex sm:flex-row flex-col sm:gap-5  w-52  sm:min-w-[600px] rounded-lg shadow-lg">
                            <div className="sm:h-36 w-52">
                                <img src={`${item.image_url}`} alt={`${item.projectId}`} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col w-52 p-2 sm:p-0 sm:w-full">
                                <h1 className="text-lg font-semibold truncate">
                                    {item.title}
                                </h1>
                                <p className="text-gray-700 truncate">{item?.Category_Badge}</p>
                                <p className="text-gray-700 truncate">{item?.Tech_Stack_Badges?.join(" ,")}</p>
                                <div className="flex flex-row sm:gap-5 gap-3 justify-center sm:justify-start mt-2">
                                    <button onClick={() => handleCancel(item.projectId)} className="sm:px-2 sm:py-2 sm:text-base px-1 py-1  text-sm rounded-lg text-black border hover:shadow-inner hover:shadow-rose-600 hover:border-red-600">Cancel Order</button>
                                    <button onClick={() => settrackorder(true)} className="sm:px-2 sm:py-2  sm:text-base text-sm py-1 px-1  rounded-lg text-black border hover:shadow-inner hover:shadow-green-600/40 hover:border-green-500">Track Order</button>
                                </div>
                            </div>

                        </div>

                    ))}
                    <ModalCancelOrder isOpen={cancelordermodal} onClose={() => setcancelordermodal(false)}>
                        <h1 className="text-2xl text-red-600 text-center">Alert..!</h1>
                        <p className="text-gray-700 text-center text-lg">Are you sure  do you want to cancel the order</p>
                        <div className="flex flex-row gap-5 justify-center mt-2">
                            <button onClick={() => setcancelordermodal(false)} className="py-2 px-5 rounded-lg border hover:bg-black hover:text-white">keep it</button>
                            <button onClick={handleyesCancel} className="py-2 px-3 rounded-lg border hover:bg-red-700">Yes cancel</button>
                        </div>
                    </ModalCancelOrder>

                    <ModalOrderTrack isOpen={trackorder} onClose={() => settrackorder(false)}>

                        <div className="flex flex-row gap-2">
                            <div className="flex flex-col items-center flex-wrap mt-1.5">
                                <span class="relative flex size-3">
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
                                </span>
                                <div className="h-24 w-0.5 bg-gray-500 opacity-50"></div>

                                <span class="relative flex size-3">
                                    <span class="absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-50"></span>
                                    <span class="relative inline-flex size-3 rounded-full bg-gray-500 opacity-50"></span>
                                </span>
                                <div className="h-[70px] w-0.5 bg-gray-500 opacity-50"></div>

                                <span class="relative flex size-3">
                                    <span class="absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-50"></span>
                                    <span class="relative inline-flex size-3 rounded-full bg-gray-500 opacity-50"></span>
                                </span>
                                <div className="h-[72px] w-0.5 bg-gray-500 opacity-50"></div>

                                <span class="relative flex size-3">
                                    <span class="absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-50"></span>
                                    <span class="relative inline-flex size-3 rounded-full bg-gray-500 opacity-50"></span>
                                </span>
                                <div className="h-12 w-0.5 bg-gray-500 opacity-50"></div>

                                <span class="relative flex size-3">
                                    <span class="absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-50"></span>
                                    <span class="relative inline-flex size-3 rounded-full bg-gray-500 opacity-50"></span>
                                </span>

                            </div>
                            <div className="flex flex-col inset-0 flex-wrap px-1">
                                <h1 className="text-base">Order Confirmed</h1>
                                <p className="text-sm text-gray-600 mt-1">Your Order has been Placed</p>
                                <p className="text-sm text-gray-600 mt-1">Started Developing Project</p>
                                <p className="text-sm text-gray-600 mt-1">Backend About to complete</p>

                                <h1 className="text-base mt-2.5 opacity-80">Backend Completed</h1>
                                <p className="text-sm text-gray-600 mt-1">Started Developing Frontend</p>
                                <p className="text-sm text-gray-600 mt-1">Frontend About to complete</p>

                                <h1 className="text-base mt-3 opacity-80">Frontend Completed</h1>
                                <p className="text-sm text-gray-600 mt-1">Testing the Project</p>
                                <p className="text-sm text-gray-600 mt-1">Fixing some Bugs</p>

                                <h1 className="text-base mt-3 opacity-80">Ready to Delivar</h1>
                                <p className="text-sm text-gray-600 mt-1">Your project is ready to use</p>

                                <h1 className="text-base mt-2.5 opacity-80">Delivared</h1>

                            </div>

                        </div>

                    </ModalOrderTrack>


                </div>
                :
                <div className="flex flex-col items-center justify-center  min-h-screen">

                    <TbMoodEmpty size={100} className="text-gray-700" />
                    <p className="text-center text-gray-700 text-base mt-2">No orderes yet</p>
                    <Link to={`/Project`} className="h-10 mt-4 w-60 pt-2 bg-black block pt-0w-0.5.5 text-white text-center rounded-md">Go to project</Link>
                </div>
            }
        </>
    )
}