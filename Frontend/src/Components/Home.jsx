import React, { useState } from 'react';
import Home_image from '../assets/Home_image.jpeg';
import Ourservices from './Ourservices';
import How_we_Support_you from './How_we_Support_you';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col pt-20 relative mb-8 sm:mb-20">
      <div className="relative  to-transparent">
        <img
          src={Home_image}
          alt="home-img"
          className="max-w-dvw max-h-dvh sm:min-h-dvh sm:min-w-dvw h-full w-full"
        />

        {/*  <div className="absolute inset-0 bg-black/10"></div> */}

        <div className="absolute bottom-0 left-0 w-full sl:h-[70%] h-[50%] bg-gradient-to-t sl:from-black/60 from-black/40 to-transparent pointer-events-none"></div>
      </div>

      <div className="block relative text-center  xl:-mt-[275px] lg:-mt-[250px] md:-mt-[230px] sm:-mt-[220px] sl:-mt-[110px] xs:-mt-[90px] -mt-[75px] xl:mb-28 lg:mb-28 md:mb-28 sm:mb-28 sl:mb-7 xs:mb-6 mb-5">
        <h1 className="font-bold  text-[#FFD93D] font-serif  xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl sl:text-2xl xs:text-xl text-lg selection:bg-yellow-100 selection:text-black">
          Welcome to Code Mentor
        </h1>

        <p className="lg:text-xl md:text-sm sm:text-[12px] sl:text-[10px] xs:text-[8px] text-[7px]  lg:mt-5 md:mt-3 sm:mt-2 sl:mt-1 xs:mt-0 mt-0 text-[#ECECEC] selection:bg-yellow-100 selection:text-black">
          Looking for custom and user-friendly projects?Then get from us
        </p>
        <Link
          to={`/Project`}
          className="text-center inline-block xl:text-lg sm:text-base sl:text-sm xs:text-[14px] text-[12px] xl:py-4 sm:py-3 sl:py-2 xs:py-1 py-1 xl:px-5 sm:px-4 sl:px-2 xs:px-1 px-1 sm:mt-5 sl:mt-3 xs:mt-2 mt-1 sl:rounded-xl xs:rounded-lg rounded-md bg-gray-800 hover:scale-110 duration-500 ease-in-out font-light text-[#ECECEC]  hover:bg-gray-800"
        >
          Order now
        </Link>
      </div>

      <Ourservices />

      <How_we_Support_you />
    </div>
  );
}
