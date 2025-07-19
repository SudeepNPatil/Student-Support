import React, { createContext } from "react";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Search() {

    const { Products, searchProduct } = useContext(ProductContext);

    const Productfound = (Products || []).filter(product => product.title?.toLowerCase().includes(searchProduct?.toLowerCase()));

    return (
        <div className="flex flex-row my-10 px-10 flex-wrap gap-10 justify-center items-center max-h-screen overflow-y-scroll scroll-smooth no-scrollbar">

            {Productfound.length > 0 ?
                (
                    Productfound.map((item, index) => (
                        <Link to={`/Project/${item.category}/${item.projectId}`} key={index} className="w-52 rounded-2xl mx-auto shadow-lg cursor-pointer relative hover:scale-95 duration-500 ease-in-out">

                            <div className="w-fit h-fit overflow-hidden">
                                <img src={`${item.image_url}`} alt={`${item.title}`} className="w-full h-full object-cover rounded-2xl" />
                            </div>
                            <div className="px-4 py-3 text-sm">
                                <h1 className="text-base font-semibold truncate">{item.title}</h1>
                                <p className="truncate">{item.Category_Badge}</p>
                                <p className="truncate">{item.Tech_Stack_Badges.join(" ,")}</p>
                            </div>

                            <RiHeartAdd2Fill onClick={() => setstatus(true)} className={`text-2xl fixed top-1 right-1 ${status ? "text-red-600" : "text-gray-500"}`} />

                        </Link>
                    ))

                ) : (

                    <div className="text-2xl flex-shrink mt-40">
                        <h1 className="text-gray-700">Project Not Found...!☹</h1>
                    </div>

                )

            }

        </div>
    )
}