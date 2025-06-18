import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <>
            <div className="bg-slate-50 pt-4 flex xss:gap-4 ls:gap-20  xs:gap-8 flex-row justify-center sm:pt-6 ">

                <div className="p-2 flex flex-col gap-2 text-sm">
                    <Link to='/#' className="font-semibold">Student Support</Link>
                    <Link to='/#'>Home</Link>
                    <Link to='/#'>Project</Link>
                    <Link to='/#'>Contact</Link>
                    <Link to='/#'>About Us</Link>
                </div>

                <div className="text-sm flex flex-col p-2">

                    <h1 className="font-semibold text-sm">Stay connected</h1>
                    <div className="flex flex-row gap-1 mt-1">
                        <MdOutlineMail className="opacity-65 w-4 h-4 mt-1" />
                        <p className="text-[12px]"> sudeeppatil873@gmail.com</p>
                    </div>
                    <div className="flex flex-row justify-start gap-3 sm:gap-6 mt-3 sm:mt-4 opacity-70">
                        <FaInstagram className="w-3 h-3 sm:w-5 sm:h-5" />
                        <BsTwitterX className="w-3 h-3 sm:w-5 sm:h-5" />
                        <FaLinkedin className="w-3 h-3 sm:w-5 sm:h-5" />
                    </div>

                </div>

            </div>
            <div className="flex flex-row justify-center pt-2 pb-8 gap-5 xss:gap-9 ls:gap-24 xs:gap-16 bg-slate-50">
                <p className="text-[12px] xs:ml-2 ls:mr-1">Built with 💛 by Sudeep</p>
                <p className="text-[12px] ">© 2025 All rights reserved</p>
            </div>
        </>
    )
}

