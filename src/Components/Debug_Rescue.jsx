import React from "react";
import Navbar from "./Navbar";

export default function Debug_Rescue() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center bg-yellow-100 pb-5 pt-24">

                <h1 className="text-x text-center font-bold ">We Here to Support you</h1>
                <p className="text-gray-700 mt-2 w-[80vw]">Stuck on a bug or problem in your project? Tell us your issue, and we’ll help you fix it — fast!</p>

            </div>

            <div className="flex flex-col items-center mt-5 flex-wrap">
                <form className="flex flex-col flex-wrap">
                    <label htmlFor="Name">Name :</label>
                    <input type="text" id="Name" placeholder="Enter your Full Name" className="border rounded-md text-sm h-8 pl-2 mb-2 w-[80vw] bg-gray-200" />
                    <label htmlFor="number">Phone Number :</label>
                    <input type="number" id="number" placeholder="Enter your phone Number" className="border  rounded-md h-8 pl-2 mb-2 text-sm w-[80vw] bg-gray-200" />
                    <label htmlFor="Email">Email :</label>
                    <input type="text" id="Email" placeholder="Enter email id" className="border  rounded-md text-sm w-[80vw] mb-2 h-8 pl-2 bg-gray-200" />
                    <label htmlFor="textarea">Describe your idea :</label>
                    <textarea name="textarea" id="textarea" placeholder="describe your Project idea here..." className="w-[80vw] border mb-4 pl-2 h-20 rounded-md text-sm bg-gray-200"></textarea>
                    <button className="bg-black text-white text-center  rounded-md h-8 text-sm w-[80vw]">Submit</button>
                </form>

                <div className="w-[80vw] border h-52 rounded-md mt-10 bg-gray-200">

                </div>


            </div>
        </>
    )
}