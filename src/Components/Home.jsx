import React, { useState } from "react";
import Homeimg from "../assets/Homeimg1.png"
import Ourservices from "./Ourservices";



export default function Home() {


    return (
        <div className="flex flex-col pt-20 relative mb-8 sm:mb-20">

            <div className="relative">

                <img src={Homeimg} alt="home-img" className="max-w-dvw max-h-dvh sm:min-h-dvh sm:min-w-dvw h-full w-full" />


                <div className="absolute inset-0 bg-black/30"></div>


            </div>

            <div className="block text-center relative -mt-24 min-w-80 max-w-96  sm:min-w-[550px] self-center sm:-mt-56 mb-3 sm:mb-28">
                <h1 className="text-center font-bold text-white text-base sm:leading-relaxed sm:text-2xl sm:ml-5">Looking for custom and user-friendly projects?Then get from us</h1>

                <button className="text-center self-center text-[8px] mt-2 h-6 w-14 p-1 sm:h-12 sm:w-28 sm:mt-3 sm:text-sm rounded-3xl font-bold border bg-yellow-100 hover:bg-yellow-300">Order now</button>

            </div>

            <Ourservices />
        </div>
    )
}