import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdErrorOutline } from "react-icons/md";

export default function Debug_Rescue() {
    return (
        <>

            <div className="flex flex-col items-center bg-red-100 pb-5 pt-24 xl:hidden">

                <h1 className="text-x text-center font-bold ">We Here to Support you</h1>
                <p className="text-gray-700 mt-2 text-center w-[80vw]">Stuck on a bug or problem in your project? Tell us your issue, and we’ll help you fix it fast!</p>

            </div>

            <div className="flex flex-col items-center mt-5 flex-wrap  xl:hidden">
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

                <div className="w-[80vw] border h-52 rounded-md mt-10 mb-8">

                    <div className="flex flex-col justify-center">
                        <MdErrorOutline size={52} className="mt-14 self-center opacity-70 text-red-300" />
                        <p className="text-sm text-center font-light opacity-65 mt-2">You are not submited your code error yet !</p>
                    </div>
                </div>


            </div>


            {/* Desktop view */}

            <div className="hidden xl:pt-28 xl: xl:flex xl:flex-col xl:bg-red-100 xl:pb-5 rounded-md ">
                <h1 className="lg:text-2xl xl:text-4xl pt-5 text-center font-bold ">We Here to Support you</h1>

                <p className="text-gray-700 mt-3 text-center w-[80vw] self-center pb-5">Stuck on a bug or problem in your project? Tell us your issue, and we’ll help you fix it fast!</p>
            </div>

            <div className="hidden xl:flex xl:gap-24 xl:flex-wrap justify-center xl:mt-12 mb-12">

                <div className="min-w-96 border p-2 rounded-[60px]">

                    <form className="xl:flex xl:flex-col xl:flex-wrap p-14 xl:min-w-[35vw]">
                        <label className="text-center font-semibold text-xl -mt-2 mb-8">Fill the Details </label>
                        <label htmlFor="Name">Name :</label>
                        <input type="text" id="Name" placeholder="Enter your Full Name" className="border rounded-md text-sm h-10 pl-2 mb-5 mt-2" />
                        <label htmlFor="number">WhatsApp Number :</label>
                        <input type="number" id="number" placeholder="Contact to reach you" className="border  rounded-md h-10 pl-2 mb-5 mt-2 text-sm " />
                        <label htmlFor="textarea">Describe Your Issue</label>
                        <textarea name="textarea" id="textarea" placeholder="Paste your error, code, or explain what’s not working..." className="border mb-5 pl-2 mt-2 h-24 text-sm rounded-md"></textarea>
                        <label htmlFor="file">Upload Screenshot</label>
                        <input type="file" id="file" className="block xl:file:w-[26.5vw] file:text-black file:bg-blue-50 file:rounded-md file:py-2   file:border-0 mb-6 mt-2 text-sm" />
                        <button className="bg-black text-white text-center  rounded-md h-10 text-sm">Submit</button>
                    </form>

                </div>

                <div className="min-w-96 border text-center rounded-[60px] xl:min-w-[35vw]">
                    <div className="flex justify-center items-center mt-48">
                        <MdErrorOutline size={100} className="opacity-60 text-red-500" />
                    </div>
                    <p className="text-md font-light opacity-65 mt-2">You are not submited your code error yet !</p>
                    <p></p>
                </div>

            </div>

        </>
    )
}