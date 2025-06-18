import React, { useState } from "react";

import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";


export default function Ourservices() {

    const [currentindex, setCurrentIndex] = useState(0)

    const prestep = () => {
        setCurrentIndex(currentindex - 1);
    };

    const nextstep = () => {
        setCurrentIndex(currentindex + 1);
    };

    let items = [0, 1, 2];

    return (
        <>
            <div className="font-bold text-sm sm:text-2xl mt-2 sm:mt-5 pt-3 sm:pt-11 opacity-80 mb-4 sm:mb-8 text-center w-full h-12 sm:h-32 bg-yellow-50">Our Services</div>
            <div className="hidden sm:flex sm:gap-5 sm:justify-evenly">
                <div className="w-40 h-40 rounded-3xl sm:w-96 sm:h-96 sm:rounded-[60px] bg-gray-50 border">

                </div>

                <div className="w-40 h-40 rounded-3xl sm:w-96 sm:h-96 sm:rounded-[60px] bg-gray-50 border">

                </div>

                <div className="w-40 h-40 rounded-3xl sm:w-96 sm:h-96 sm:rounded-[60px] bg-gray-50 border">

                </div>
            </div>

            {/* Mobile view */}

            <div className="relative w-[80vw] text-center self-center h-auto sm:hidden">

                <div className="overflow-hidden relative w-[55vw] mx-auto">
                    <div
                        className="flex h-40 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentindex * 100}%)` }}
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="w-[55vw] flex-shrink-0 bg-gray-50 rounded-xl border p-4"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>


                <IoIosArrowDropleft className="w-5 h-5 absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer opacity-65" onClick={prestep} />
                <IoIosArrowDropright className="w-5 h-5 absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer opacity-65" onClick={nextstep} />

            </div >

            <div className="flex flex-row justify-center gap-2 mt-2  sm:hidden">

                <button className={`w-2 h-2 rounded-full border ${currentindex == 0 ? 'bg-white' : 'bg-gray-200'} `}></button>
                <button className={`w-2 h-2 rounded-full border ${currentindex == 1 ? 'bg-white' : 'bg-gray-200'} `}></button>
                <button className={`w-2 h-2 rounded-full border  ${currentindex == 2 ? 'bg-white' : 'bg-gray-200'} `}></button>

            </div>







        </>

    )
}