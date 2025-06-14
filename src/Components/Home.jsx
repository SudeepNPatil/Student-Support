import React, { useState } from "react";
import Homeimg from "../assets/Homeimg1.png"
import Ourservices from "./Ourservices";



export default function Home() {

    const [currnt_img, setcurrnet_img] = useState(0)


    return (
        <div className="flex flex-col pt-20 relative mb-8 sm:mb-20">

            <div className="relative w-auto h-auto flex overflow-auto">


                <img src={Homeimg} alt="home-img" className="max-w-dvw max-h-dvh sm:min-h-dvh sm:min-w-dvw" />


                <div className="absolute inset-0 bg-black/30"></div>


            </div>
            <div className="block text-center relative -mt-24 min-w-80 max-w-96 sm:min-w-[550px] self-center sm:-mt-56 mb-3 sm:mb-28">
                <h1 className="text-center font-bold text-white text-base sm:text-2xl sm:ml-5">Looking for custom and user-friendly projects?Then get from us</h1>

                <button className="text-center self-center text-[10px] mt-2 h-7 w-16 p-1 sm:h-10 sm:w-24 sm:text-sm rounded-3xl font-bold border bg-yellow-100 hover:bg-yellow-300">Order now</button>

            </div>

            <Ourservices />

        </div>
    )
}