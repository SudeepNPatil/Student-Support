import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Debug_Rescue() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center bg-yellow-100 pb-5 pt-24">

                <h1 className="text-x text-center font-bold ">We Here to Support you</h1>
                <p className="text-gray-700 mt-2 text-center w-[80vw]">Stuck on a bug or problem in your project? Tell us your issue, and we’ll help you fix it fast!</p>

            </div>

            <div className="flex flex-col items-center mt-5 flex-wrap">
                <form className="flex flex-col flex-wrap">
                    <label htmlFor="Name">Name :</label>
                    <input type="text" id="Name" placeholder="Enter your Full Name" className="border rounded-md text-sm h-8 pl-2 mb-4 mt-2 w-[80vw] bg-gray-200" />
                    <label htmlFor="number">WhatsApp Number :</label>
                    <input type="number" id="number" placeholder="Contact to reach you" className="border  rounded-md h-8 pl-2 mb-4 mt-2 text-sm w-[80vw] bg-gray-200" />
                    <label htmlFor="textarea">Describe Your Issue</label>
                    <textarea name="textarea" id="textarea" placeholder="Paste your error, code, or explain what’s not working..." className="w-[80vw] border mb-4 pl-2 mt-2 h-20 rounded-md text-sm bg-gray-200"></textarea>
                    <label htmlFor="file">Upload Screenshot</label>
                    <input type="file" id="file" className="block file:w-[80vw] mb-6 mt-2 text-sm text-gray-500
               file:mr-4 file:py-2 file:px-4
               file:rounded-md file:border-0
               file:text-sm file:font-semibold
               file:bg-blue-50 file:text-blue-700
               hover:file:bg-blue-100" />
                    <button className="bg-black text-white text-center  rounded-md h-8 text-sm w-[80vw]">Submit</button>
                </form>

                <div className="w-[80vw] border h-52 rounded-md mt-10 bg-gray-200 mb-8">

                </div>


            </div>

            <Footer />
        </>
    )
}