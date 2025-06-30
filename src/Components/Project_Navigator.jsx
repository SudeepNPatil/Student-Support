import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IoHourglassOutline } from "react-icons/io5";

export default function Project_Navigator() {
    return (
        <>

            <div className="pt-24 bg-green-100 pb-5 flex flex-col items-center xl:hidden">
                <h1 className="text-xl font-bold text-center ">Take Support From Us</h1>
                <p className="text-gray-700 mt-2 text-center w-[85vw]">Have an idea but don’t know where to start? We’ll guide you with tech stack, tools, deployment, and more!</p>
            </div>

            <div className="flex flex-col items-center mt-5 flex-wrap xl:hidden">
                <h1 className="font-semibold text-md">Book Session</h1>
                <form className="flex flex-col flex-wrap mt-4">
                    <label htmlFor="Name">Name :</label>
                    <input type="text" id="Name" placeholder="Enter your Full Name" className="border rounded-md text-sm h-8 pl-2 mb-4 w-[80vw] bg-gray-200" />
                    <label htmlFor="Date">Date :</label>
                    <input type="date" id="Date" className="border  rounded-md h-8 pl-2 mb-4 opacity-70 text-sm w-[80vw] bg-gray-200" />
                    <label htmlFor="Time">Time :</label>
                    <input type="Time" id="Time" placeholder="Enter email id" className="border  rounded-md text-sm w-[80vw] mb-4 h-8 pl-2 bg-gray-200" />
                    <label htmlFor="textarea">Choose speaking language:</label>
                    <select className="w-[80vw] border mb-4 pl-2 mt-1 h-8 rounded-md text-sm bg-gray-200">
                        <option value="Select">Select</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                    </select>

                    <button className="bg-black text-white text-center  rounded-md h-8 text-sm w-[80vw]">Book Now</button>
                </form>

                <div className="w-[80vw] border h-52 rounded-md mt-10">

                    <div className="flex flex-col justify-center">
                        <IoHourglassOutline size={52} className="mt-14 self-center opacity-70 text-green-300" />
                        <p className="text-sm text-center font-light opacity-65 mt-2">You are not Booked your Session yet !</p>
                    </div>

                </div>
            </div>

            {/* Desktop view */}

            <div className="hidden xl:pt-28 xl: xl:flex xl:flex-col xl:bg-green-100 xl:pb-5 rounded-md ">
                <h1 className="lg:text-2xl xl:text-4xl pt-5 text-center font-bold ">Take Support From Us</h1>

                <p className="text-gray-700 mt-3 text-center w-[80vw] self-center pb-5">Have an idea but don’t know where to start? We’ll guide you with tech stack, tools, deployment, and more!</p>
            </div>

            <div className="hidden xl:flex xl:gap-24 xl:flex-wrap justify-center xl:mt-12 mb-12">

                <div className="min-w-96 border p-2 rounded-[60px]">

                    <form className="flex xl:flex-col xl:flex-wrap  p-14 xl:min-w-[35vw]">
                        <label className="text-center font-semibold text-xl -mt-2 mb-8">Fill the Details </label>
                        <label htmlFor="Name">Name :</label>
                        <input type="text" id="Name" placeholder="Enter your Full Name" className="border rounded-md text-sm h-10 pl-2 mb-5 mt-2 " />
                        <label htmlFor="Date">Date :</label>
                        <input type="date" id="Date" className="border  rounded-md h-10 pl-2 mb-5 opacity-70 text-sm  mt-2" />
                        <label htmlFor="Time">Time :</label>
                        <input type="Time" id="Time" placeholder="Enter email id" className="border  rounded-md text-sm  mt-2  mb-5 h-10 pl-2" />
                        <label htmlFor="textarea">Choose speaking language:</label>
                        <select className="border mb-5 pl-2 mt-2 h-10 rounded-md  text-sm">
                            <option value="Select">Select</option>
                            <option value="Kannada">Kannada</option>
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                        </select>

                        <button className="bg-black text-white text-center mt-4 rounded-md h-10 text-sm">Book Now</button>
                    </form>

                </div>

                <div className="min-w-96 border text-center rounded-[60px] xl:min-w-[35vw]">
                    <div className="flex justify-center items-center mt-48">
                        <IoHourglassOutline size={100} className="opacity-60 text-green-400" />
                    </div>
                    <p className="text-md font-light opacity-65 mt-2">You are not Booked your Session yet !</p>
                    <p></p>
                </div>

            </div>
        </>
    )
}