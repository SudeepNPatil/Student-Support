import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <>
            <div className="bg-slate-50 pt-4 flex xss:gap-4 ls:gap-20  xs:gap-8 flex-row  justify-center sm:pt-6 sm:gap-40 lg:gap-80">

                <div className="p-2 flex flex-col gap-2 text-sm sm:text-base lg:text-md">
                    <Link to='/Home' className="font-semibold sm:text-lg lg:text-xl">Student Support</Link>
                    <Link to='/Home'>Home</Link>
                    <Link to='/Project/ecommerce'>Project</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link to='/#'>About Us</Link>
                </div>

                <div className="text-sm sm:text-base  lg:text-md flex flex-col p-2">

                    <h1 className="font-semibold sm:text-lg lg:text-xl">Stay connected</h1>
                    <div className="flex flex-row gap-1 mt-1 sm:mt-3">
                        <MdOutlineMail className="opacity-65 w-4 h-4 mt-1 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        <p className="text-[12px] sm:text-base lg:mt-1"> sudeeppatil873@gmail.com</p>
                    </div>
                    <div className="flex flex-row justify-start gap-3 sm:gap-6 mt-3 sm:mt-4 opacity-70">
                        <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                        <BsTwitterX className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                        <FaLinkedin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </div>

                </div>

            </div>
            <div className="flex flex-row justify-center pt-2 pb-8 gap-5 xss:gap-9 ls:gap-28 xs:gap-16 sm:gap-48 lg:gap-96 bg-slate-50 sm:pt-8">
                <p className="text-[12px] xs:ml-2  sm:text-base sm:ml-3 lg:ml-6">Built with 💛 by Sudeep</p>
                <p className="text-[12px]  sm:text-base ">© 2025 All rights reserved</p>
            </div>
        </>
    )
}

