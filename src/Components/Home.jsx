import React from "react";
import Homeimg from "../assets/Homeimg1.png"
import Ourservices from "./Ourservices";


export default function Home() {
    return (
        <div className="flex flex-col pt-20 relative ">
            <div className="relative">
                <img src={Homeimg} alt="home-img" className="max-w-dvw max-h-dvh sm:min-h-dvh sm:min-w-dvw" />
                <div className="absolute inset-0 bg-black/30"></div>

                <h1 className="absolute sm:text-[2em] w-4/5 top-[70px] left-10 sm:top-[390px] sm:left-96 text-white text-center font-bold sm:w-1/2 ">Looking for custom and user-friendly projects?Then get from us</h1>

                <button className="absolute top-[130px] left-40 sm:top-[500px] sm:left-[630px] text-center h-6 text-[8px] sm:text-[16px] p-1 w-14 sm:w-32 sm:h-12 rounded-3xl font-bold bg-transparent border-2 hover:bg-yellow-300">Order now</button>

            </div>

            <Ourservices />

        </div>
    )
}