import React, { useState } from "react";
import Home_image from "../assets/Home_image.jpeg"
import Ourservices from "./Ourservices";
import How_we_Support_you from "./How_we_Support_you";



export default function Home() {

    return (

        <div className="flex flex-col pt-20 relative mb-8 sm:mb-20">

            <div className="relative  to-transparent">

                <img src={Home_image}

                    alt="home-img" className="max-w-dvw max-h-dvh sm:min-h-dvh sm:min-w-dvw h-full w-full" />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute bottom-0 left-0 w-full sl:h-[70%] h-[50%] bg-gradient-to-t sl:from-black/80 from-black/60 to-transparent pointer-events-none"></div>

            </div>

            <div className="block relative text-center  xl:-mt-[275px] lg:-mt-[250px] md:-mt-[230px] sm:-mt-[220px] sl:-mt-[110px] xs:-mt-[90px] -mt-[75px] xl:mb-28 lg:mb-24 md:mb-24 sm:mb-24 sl:mb-3 xs:mb-4 mb-3">
                <h1 className="font-bold text-lime-100 xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl sl:text-2xl xs:text-xl text-lg">Welcome to Student Support</h1>

                <p className="lg:text-xl md:text-sm sm:text-[12px] sl:text-[10px] xs:text-[8px] text-[7px]  lg:mt-5 md:mt-3 sm:mt-2 sl:mt-1 xs:mt-0 mt-0 text-gray-300">Looking for custom and user-friendly projects?Then get from us</p>
                <button className="text-center xl:text-lg sm:text-base sl:text-sm xs:text-[14px] text-[12px] xl:py-4 sm:py-3 sl:py-2 xs:py-1 py-1 xl:px-5 sm:px-4 sl:px-2 xs:px-1 px-1 sm:mt-5 sl:mt-3 xs:mt-2 mt-1 sl:rounded-xl xs:rounded-lg rounded-md bg-gray-800 hover:scale-110 duration-500 ease-in-out font-light text-white  hover:bg-gray-800">Order now</button>

            </div>

            <Ourservices />

            <How_we_Support_you />

        </div>

    )
}