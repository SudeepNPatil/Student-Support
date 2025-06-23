import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Custom_Build_Service() {
    return (
        <>
            <Navbar />
            <div className="pt-28 flex flex-col bg-blue-100 pb-5 rounded-md">
                <h1 className="text-xl text-center font-bold">Bring Your Project Idea to Life</h1>

                <p className="text-gray-700 mt-2 text-center font-semibold w-[80vw] self-center">Share your project idea and let our team build it for you on time, with the best technology stack.</p>
            </div>

            <div className="flex flex-col items-center mt-5 flex-wrap">
                <form className="flex flex-col flex-wrap">

                    <label htmlFor="Name">Name :</label>
                    <input type="text" id="Name" placeholder="Enter your Full Name" className="border rounded-md text-sm h-8 pl-2 mb-4 mt-2 w-[80vw] bg-gray-200" />
                    <label htmlFor="number">Phone Number :</label>
                    <input type="number" id="number" placeholder="Enter your phone Number" className="border  rounded-md h-8 pl-2 mb-4 mt-2 text-sm w-[80vw] bg-gray-200" />
                    <label htmlFor="Email">Email :</label>
                    <input type="text" id="Email" placeholder="Enter email id" className="border  rounded-md text-sm w-[80vw] mb-4 mt-2 h-8 pl-2 bg-gray-200" />
                    <label htmlFor="textarea">Describe your idea :</label>
                    <textarea name="textarea" id="textarea" placeholder="describe your Project idea here..." className="w-[80vw] border mb-4 mt-2 pl-2 h-20 rounded-md text-sm bg-gray-200"></textarea>
                    <button className="bg-black text-white text-center  rounded-md h-8 text-sm w-[80vw]">Submit</button>
                </form>

                <div className="w-[80vw] border h-52 rounded-md mt-10 bg-gray-200">

                </div>

                <div className="w-[80vw] text-sm mt-8 mb-10">
                    <h1 className="text-md font-semibold"> Why Choose Us</h1>
                    <ul className="list-none">
                        <li className="mt-2">✅ Affordable & Negotiable Pricing</li>
                        <li className="w-[86vw] mt-2">✅ On-Time Delivery with Source Code & Demo</li>
                        <li className="mt-2">✅ Friendly Support & Regular Updates</li>
                    </ul>

                </div>

            </div>

            <Footer />

        </>
    )
}