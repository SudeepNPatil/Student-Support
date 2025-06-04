import React, { useState } from "react";
import Homeimg from "../assets/Homeimg1.png"
import Ourservices from "./Ourservices";



export default function Home() {

    const [currnt_img, setcurrnet_img] = useState(0)

    const src_img = [
        Homeimg,
        Homeimg,
        Homeimg
    ]



    return (
        <div className="flex flex-col pt-20 relative mb-8 sm:mb-20">

            <div className="relative w-auto h-auto flex overflow-auto">

                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currnt_img * 100}%)` }} >
                    {src_img.map((item, index) => (
                        <img key={index} src={item} alt="home-img" className="max-w-dvw max-h-dvh sm:min-h-dvh sm:min-w-dvw" />
                    ))}
                </div>

                <div className="absolute inset-0 bg-black/30"></div>

                <h1 className="absolute sm:text-[2em] w-4/5 top-[70px] left-10 sm:top-[390px] sm:left-96 text-white text-center font-bold sm:w-1/2 ">Looking for custom and user-friendly projects?Then get from us</h1>

                <button className="absolute top-[130px] left-40 sm:top-[500px] sm:left-[630px] text-center h-6 text-[8px] sm:text-[16px] p-1 w-14 sm:w-32 sm:h-12 rounded-3xl font-bold bg-transparent border bg-yellow-100 hover:bg-yellow-300">Order now</button>

            </div>

            <Ourservices />

        </div>
    )
}