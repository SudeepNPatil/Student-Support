import React, { useState } from "react";
import Home_image from "../assets/Home_image.jpeg"
import Ourservices from "./Ourservices";
import How_we_Support_you from "./How_we_Support_you";



export default function Home() {


    return (

        <div className="flex flex-col pt-20 relative mb-8 sm:mb-20">

            <div className="relative  to-transparent">

                <img src={Home_image}

                    /* src="https://media.istockphoto.com/id/1041976346/photo/senior-architect-or-engineer-holding-something-in-empty-hand.jpg?s=2048x2048&w=is&k=20&c=TT7NQZFV20840HVmkgwiLdUWm8akkr5RXEmiJZHgO3Q=" */

                    /* src="https://media.istockphoto.com/id/1237258335/photo/horizontal-banner-of-young-handsome-smiling-business-man-holding-laptop-in-hands-typing-and.jpg?s=2048x2048&w=is&k=20&c=UAiNX1wXvFiw7WpVDK9g9mzHtCwGEZAmZnyXSpjumjA=" */
                    alt="home-img" className="max-w-dvw max-h-dvh sm:min-h-dvh sm:min-w-dvw h-full w-full" />


                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>


            </div>

            <div className="block relative text-center  sm:-mt-[275px] mb-3 sm:mb-28">
                <h1 className="font-bold text-lime-100 sm:text-6xl">Welcome to Student Support</h1>

                <p className="text-xl text-gray-300 mt-5">Looking for custom and user-friendly projects?Then get from us</p>
                <button className="text-center self-center py-3 px-4 bg-gray-800 rounded-xl hover:scale-110 duration-500 ease-in-out font-light text-white mt-5 hover:bg-gray-800">Order now</button>

            </div>

            <Ourservices />

            <How_we_Support_you />

        </div>





    )
}