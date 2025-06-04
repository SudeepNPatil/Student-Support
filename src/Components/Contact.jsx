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
                <div className="flex w-2/3 h-auto rounded-xl border pb-5">

                    <div className="self-center w-1/2 pl-10">
                        <h1 className="text-[35px] font-bold mb-3 pt-40 transform scale-y-110">
                            Let's Talk
                        </h1>
                        <p className="mt-2 max-w-96 ">
                            Have some big idea or brand to develop and need help?
                            Then reach out we'd love to hear about your project  and provide help
                        </p>
                        <h1 className="text-xl font-bold mt-9">
                            Email
                        </h1>
                        <div className="flex inset-0 mt-2 gap-1">
                            <MdOutlineMail className="w-5 h-5 mt-[3px]" />
                            <p>sudeeppatil873@gmail.com</p>
                        </div>
                        <h1 className="text-xl font-bold mt-9"> Socials </h1>
                        <div className="flex gap-5  mt-3">
                            <FaInstagram className="w-5 h-5" />
                            <BsTwitterX className="w-5 h-5 " />
                            <FaLinkedin className="w-5 h-5" />

                        </div>
                    </div>

                    <div className="w-1/2 pt-24 pl-8">

                        <label htmlFor="name" >Name </label>

                        <input type="text" className="border w-96 mt-1 mb-4 h-10 rounded-md pl-2 block text-sm" placeholder='Enter your Name' />

                        <label htmlFor="Email" >Email </label>

                        <input type="Email" className="border mt-1 mb-4 w-96 h-10 rounded-md pl-2 block text-sm" placeholder="Enter your Email id" />

                        <label htmlFor="Email">What service are you interested in </label>

                        <select name="service" id="service" className="w-96 pl-2 h-10 opacity-75 mt-1 mb-4 border rounded-md text-sm">
                            <option value="select">Select option </option>
                            <option value="Build Project">Build Project</option>
                            <option value="Buy Project">Buy Project</option>
                            <option value="Research Paper">Research Paper</option>
                            <option value="IOT Project">IOT Project</option>
                            <option value="Guidance about Project">Guidance about Project</option>
                            <option value="others">others</option>

                        </select>

                        <label htmlFor="Budget">Budget </label>

                        <select name="amount" id="amount" className="w-96 pl-2 h-10 mt-1 mb-4 opacity-75 border rounded-md text-sm">
                            <option value="choose amount">choose amount</option>
                            <option value="500">Less than 500</option>
                            <option value="800">Less than 800</option>
                            <option value="1000">Less than 1000</option>
                            <option value="1200">Less than 1200</option>
                            <option value="1500">Less than 1500</option>
                            <option value="will decide">will decide while talking</option>

                        </select>

                        <label htmlFor="message">Message </label>

                        <textarea name="text" id="text" placeholder="write what you want to ask about..." className="text-sm w-96 pl-3 pt-2 mt-1 mb-4 min-h-28 border rounded-md"></textarea>

                        <button className="bg-black text-white w-96 h-10 rounded-md mb-4">Submit</button>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

/* 
 <div className="border h-screen self-center w-1/2 bg-red-50 pl-32">
                    <h1 className="text-[30px] font-bold pt-52">
                        Let's Talk
                    </h1>
                    <p className="mt-2 max-w-96 border">
                        Have some big idea or brand to develop and need help?
                        Then reach out we'd love to hear about your project  and provide help
                    </p>
                    <h1 className="text-xl font-bold mt-4">
                        Email
                    </h1>
                    <div className="flex inset-0 mt-2 gap-1">
                        <MdOutlineMail className="w-5 h-5 mt-[3px]" />
                        <p>sudeeppatil873@gmail.com</p>
                    </div>
                    <h1 className="text-xl font-bold mt-4"> Socials </h1>
                    <div className="flex gap-5  mt-4">
                        <FaInstagram className="w-5 h-5" />
                        <BsTwitterX className="w-5 h-5 " />
                        <FaLinkedin className="w-5 h-5" />

                    </div>
                </div>

                <div className="border h-screen w-1/2 bg-green-50">

                </div> */