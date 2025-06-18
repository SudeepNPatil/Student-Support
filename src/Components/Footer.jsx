import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="bg-slate-50 pb-8 flex flex-row justify-center gap-5">

            <div className="bg-blue-500 p-2 flex flex-col gap-2 text-sm">
                <Link to='/#' className="font-semibold">Student Support</Link>
                <Link to='/#'>Home</Link>
                <Link to='/#'>Project</Link>
                <Link to='/#'>Contact</Link>
                <Link to='/#'>About Us</Link>
            </div>

            <div className="bg-orange-500 text-sm flex flex-col">

                <h1 className="font-semibold">Stay connected</h1>
                <MdOutlineMail className="inline-block opacity-65 w-4 h-4" />
                <p className="inline-block">sudeeppatil873@gmail.com</p>
                <div className="flex flex-row justify-start gap-3 sm:gap-6 mt-3 sm:mt-4 opacity-70">
                    <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    <BsTwitterX className="w-4 h-4 sm:w-5 sm:h-5" />
                    <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

            </div>

        </div>
    )
}





/*   <div className="flex flex-row  sm:gap-96 border border-black">

                <ul className="flex flex-col mt-8 sm:mt-10">
                    <li className="text-sm sm:text-xl font-bold opacity-75">
                        <a href="#" >Student Support</a>
                    </li>
                    <li className="pt-3 font-semibold opacity-75 text-sm sm:text-base">
                        <a href="#">Home</a>
                    </li>
                    <li className="pt-2 font-semibold opacity-75  text-sm sm:text-base">
                        <a href="#">Project</a>
                    </li>
                    <li className="pt-2 font-semibold opacity-75  text-sm sm:text-base">
                        <a href="#">Contact</a>
                    </li>
                    <li className="pt-2 font-semibold opacity-75  text-sm sm:text-base">
                        <a href="#">About Us</a>
                    </li>
                </ul>
                <div className="self-center ml-20 m:mt-10">
                    <h1 className="text-sm sm:text-xl font-bold opacity-75">Stay connected</h1>
                    <MdOutlineMail className="inline-block opacity-65 w-4 h-4 sm:w-5 sm:h-5" />
                    <p className="inline-block sm:mt-3 sm:ml-2 mt-2 opacity-75 ml-2 text-sm sm:text-base ">sudeeppatil873@gmail.com</p>
                    <div className="flex flex-row justify-start gap-3 sm:gap-6 mt-3 sm:mt-4 opacity-70">
                        <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                        <BsTwitterX className="w-4 h-4 sm:w-5 sm:h-5" />
                        <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                </div>

            </div>
            <div className="flex flex-col ml-10 sm:flex-row justify-center items-center gap-6 sm:gap-96 mt-6 sm:mt-10 pb-6 sm:pb-10 opacity-70">
                <p className="text-sm sm:text-base">Built with 💛 by Sudeep</p>
                <p className="text-sm sm:text-base sm:mr-7">© 2025 All rights reserved</p>
            </div>

        </div> */