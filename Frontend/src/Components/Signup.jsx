import React from "react"
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import SignupCom1 from "./SignupCom1";
import SignupCom2 from "./SignupCom2";
import { useState } from "react";
import ModalSignup from "../Modals/ModalSignup";
import ModalLoading from "../Modals/ModalLoading";
import ModalWarning from "../Modals/ModalWarning";

export default function Signup() {


    const [nextStep, setNextStep] = useState(false);

    const [ismodalopen, setmodalopen] = useState(false);

    const [loadingmodal, setloadingmodal] = useState(false);

    const [warnig, setwarning] = useState(false);


    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlesubmit = async function (e) {

        e.preventDefault();

        setloadingmodal(true);

        let response = await fetch("https://student-support-s0xt.onrender.com/User", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        let result = await response.json();

        if (response.status == 201) {
            setloadingmodal(false);
            setmodalopen(true);
        }
        if (response.status == 429) {
            setloadingmodal(false);
            setwarning(true);
        }

    }

    return (
        <div className="flex flex-col justify-center items-center 2xl:h-screen">
            <div className="mx-auto flex flex-row rounded-lg bg-white lg:w-[80vw] sm:w-[100vw] lg:border relative">

                <Link to={`/Home`}><GoArrowLeft size={30} className="hidden sm:absolute sm:block top-0 lg:-left-9 md:left-0 border rounded-full" /></Link>

                <div className="hidden sm:block lg:w-[38%] sm:w-[40%] rounded-l-lg bg-green-50 h-auto">


                    <div className="flex py-10 xl:px-10 lg:px-6 md:px-4 sm:px-3 lg:mt-0 md:mt-10 sm:mt-6 items-center gap-2">
                        <button className="border-4 w-7 h-7 rounded-full border-blue-700"></button>
                        <h1 className="text-xl font-semibold tracking-wider">Student Support</h1>
                    </div>


                    <div className={`flex flex-col ${nextStep ? 'opacity-50' : 'opacity-100'}`}>
                        <div className="flex flex-wrap gap-2 mt-8 items-center">
                            <button className="border-2 px-[7px] py-[1px] xl:ml-10 lg:ml-6 md:ml-4 sm:ml-3  rounded-full border-blue-400">✓</button>
                            <h1 className="text-lg font-semibold tracking-wide">Your details</h1>
                        </div>
                        <p className="text-gray-700 xl:ml-[76px] lg:ml-[65px] md:ml-[56px] sm:ml-[47px] mt-1 text-base xl:pr-10 lg:pr-3 sm:pr-2">Please provide your valid name and email</p>
                    </div>

                    <div className={`flex flex-col  ${nextStep ? 'opacity-100' : 'opacity-50'}`}>
                        <div className="flex flex-wrap gap-2 mt-5 items-center">
                            <button className="border-2 px-[7px] py-[1px] xl:ml-10 lg:ml-6 md:ml-4 sm:ml-3  rounded-full border-blue-400">✓</button>
                            <h1 className="text-lg font-semibold tracking-wide">Choose password</h1>
                        </div>
                        <p className="text-gray-700 xl:ml-[76px] lg:ml-[65px] md:ml-[58px] sm:ml-[47px] mt-1 text-base xl:pr-10 lg:pr-3 sm:pr-2">Must be at least 8 characters</p>
                    </div>

                </div>

                {nextStep ? <SignupCom2 formData={formData} handleChange={handleChange} handlesubmit={handlesubmit} /> : <SignupCom1 setNextStep={setNextStep} formData={formData} handleChange={handleChange} />}

            </div>

            <ModalSignup isOpen={ismodalopen} onClose={() => setmodalopen(false)}>
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl text-center font-semibold">User registered successfully✅</h1>

                    <p className="text-sm text-gray-500 px-8 text-center mt-5">the user created there profile in student suppot poartal now you can login.</p>

                    <Link to="/Login" className="px-10 py-2 rounded-lg mt-5 bg-black bg-opacity-80 text-white text-center mx-auto">Go to Login</Link>
                </div>
            </ModalSignup>

            <ModalLoading isOpen={loadingmodal} onClose={() => setloadingmodal(false)}>
                <div className="flex justify-center items-center z-50 ">
                    <div className="w-12 h-12 border-4  border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </ModalLoading>

            <ModalWarning isOpen={warnig} onClose={() => setwarning(false)}>
                <div className="flex flex-col">
                    <h1 className="text-lg text-red-500">
                        Too many signup attempts. Please try again after 1 Hour
                    </h1>
                </div>
            </ModalWarning>

        </div>

    )
}