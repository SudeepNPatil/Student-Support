import React from "react";
import Navbar from "./Navbar";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Footer from "./Footer";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center mb-8">
                <div className="flex flex-col sm:flex-row w-screen sm:w-2/3 h-auto rounded-xl border pb-5">

                    <div className="self-center sm:w-1/2 pl-8">
                        <h1 className="text-2xl sm:text-[35px] font-bold mb-4 pt-36 sm:pt-40 transform scale-y-110">
                            Let's Talk
                        </h1>
                        <p className="sm:mt-6 mt-3 pr-8 sm:pr-0 sm:max-w-96 text-sm sm:text-base">
                            Have some big idea or brand to develop and need help?
                            Then reach out we'd love to hear about your project  and provide help
                        </p>
                        <h1 className="text-lg sm:text-xl font-bold mt-6 sm:mt-9">
                            Email
                        </h1>
                        <div className="flex inset-0 mt-2 gap-1">
                            <MdOutlineMail className="w-5 h-5 sm:mt-[3px]" />
                            <p className="text-sm sm:text-base">sudeeppatil873@gmail.com</p>
                        </div>
                        <h1 className="text-lg sm:text-xl font-bold mt-6 sm:mt-9"> Socials </h1>
                        <div className="flex gap-5  mt-3">
                            <FaInstagram className="sm:w-5 sm:h-5 w-4 h-4" />
                            <BsTwitterX className="sm:w-5 sm:h-5 w-4 h-4" />
                            <FaLinkedin className="sm:w-5 sm:h-5 w-4 h-4" />

                        </div>
                    </div>

                    <div className="w-auto sm:w-1/2 pt-16 sm:pt-24 pl-8 ">

                        <label htmlFor="name" >Name </label>

                        <input type="text" className="border w-11/12 sm:w-96 mt-1 mb-4 h-10 rounded-md pl-2 block text-sm" placeholder='Enter your Name' />

                        <label htmlFor="Email" >Email </label>

                        <input type="Email" className="border mt-1 mb-4 w-11/12 sm:w-96  h-10 rounded-md pl-2 block text-sm" placeholder="Enter your Email id" />

                        <label htmlFor="Email">What service are you interested in </label>

                        <select name="service" id="service" className="sm:w-96 w-11/12 pl-2 h-10 opacity-75 mt-1 mb-4 border rounded-md text-sm">
                            <option value="select">Select option </option>
                            <option value="Build Project">Build Project</option>
                            <option value="Buy Project">Buy Project</option>
                            <option value="Research Paper">Research Paper</option>
                            <option value="IOT Project">IOT Project</option>
                            <option value="Guidance about Project">Guidance about Project</option>
                            <option value="others">others</option>

                        </select>

                        <label htmlFor="Budget" className="block">Budget </label>

                        <select name="amount" id="amount" className="sm:w-96 w-11/12 pl-2 h-10 mt-1 mb-4 opacity-75 border rounded-md text-sm">
                            <option value="choose amount">choose amount</option>
                            <option value="500">Less than 500</option>
                            <option value="800">Less than 800</option>
                            <option value="1000">Less than 1000</option>
                            <option value="1200">Less than 1200</option>
                            <option value="1500">Less than 1500</option>
                            <option value="will decide">will decide while talking</option>

                        </select>

                        <label htmlFor="message" className="block">Message </label>

                        <textarea name="text" id="text" placeholder="write what you want to ask about..." className="text-sm w-11/12 sm:w-96 pl-3 pt-2 mt-1 mb-4 min-h-28 border rounded-md"></textarea>

                        <button className="bg-black text-white w-11/12 block sm:w-96 h-10 rounded-md mb-4">Submit</button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
