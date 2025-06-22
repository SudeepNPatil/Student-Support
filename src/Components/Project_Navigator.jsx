import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Project_Navigator() {
    return (
        <>
            <Navbar />
            <div className="pt-24 bg-green-100 pb-5 flex flex-col items-center">
                <h1 className="text-xl font-bold text-center ">Take Support From Us</h1>
                <p className="text-gray-700 mt-2 text-center w-[85vw]">Have an idea but don’t know where to start? We’ll guide you with tech stack, tools, deployment, and more!</p>
            </div>

            <div className="flex flex-col items-center mt-5 flex-wrap">
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

                <div className="w-[80vw] border h-52 rounded-md mt-10 bg-gray-200">

                </div>
            </div>

            <Footer />

        </>
    )
}