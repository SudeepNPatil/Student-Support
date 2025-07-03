import React from "react"
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Signupcom1 from "./SignupCom1";
import SignupCom2 from "./Signupcom2";
import { useState } from "react";

export default function Signup() {


    const [nextStep, setNextStep] = useState(false);

    console.log(nextStep)
    return (
        <div className="mx-auto flex flex-row rounded-lg bg-white w-[80vw] border relative">

            <Link to={`/Home`}><GoArrowLeft size={30} className="absolute top-0 -left-9 border rounded-full" /></Link>

            <div className="w-96 rounded-l-lg bg-green-50 h-auto">

                <div className="flex py-10 px-10 items-center gap-2">
                    <button className="border-4 w-7 h-7 rounded-full border-blue-700"></button>

                    <h1 className="text-xl font-semibold tracking-wider">Student Support</h1>
                </div>
                <div className={`flex flex-col ${nextStep ? 'opacity-50' : 'opacity-100'}`}>
                    <div className="flex flex-wrap gap-2 mt-8 items-center">
                        <button className="border-2 px-[7px] py-[1px] ml-10  rounded-full border-blue-400">✓</button>
                        <h1 className="text-lg font-semibold tracking-wide">Your details</h1>
                    </div>
                    <p className="text-gray-700 ml-[76px] mt-1 text-base pr-10">Please provide your valid name and email</p>
                </div>

                <div className={`flex flex-col  ${nextStep ? 'opacity-100' : 'opacity-50'}`}>
                    <div className="flex flex-wrap gap-2 mt-5 items-center">
                        <button className="border-2 px-[7px] py-[1px] ml-10  rounded-full border-blue-400">✓</button>
                        <h1 className="text-lg font-semibold tracking-wide">Choose password</h1>
                    </div>
                    <p className="text-gray-700 ml-[76px] mt-1 text-base pr-10">Must be at least 8 characters</p>
                </div>
            </div>

            {nextStep ? <SignupCom2 /> : <Signupcom1 setNextStep={setNextStep} />}

        </div>

    )
}