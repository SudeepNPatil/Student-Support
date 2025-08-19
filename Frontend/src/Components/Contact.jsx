import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import ModalLoading from "../Modals/ModalLoading";
import { useContext } from "react";
import ModalLogin from "../Modals/ModalLogin";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";


export default function Contact() {

    const { isLogin } = useContext(LoginContext);

    const [serverinfo, setserverinfo] = useState(null);

    const [modalstate, setmodalstate] = useState(false)
    const [checklogin, setchecklogin] = useState(false)
    const [error,seterror]= useState('');

    const [contact, setcontact] = useState({

        name: "",
        Email: "",
        service: "",
        Budget: "",
        text: ""
    });

    const handlechange = (e) => {

        const { name, value } = e.target;

        setcontact((prev) => ({
            ...prev,
            [name]: value
        }))

         if(!contact.name || !contact.Budget || !contact.Email || !contact.service){
            seterror("⚠ Please fill all the details..!")
            return
        }else{
            seterror('');
        }

    }

    const handlesubmit = async (e) => {

        e.preventDefault();

        if(!contact.name || !contact.Budget || !contact.Email || !contact.service){
            seterror("⚠ Please fill all the details..!")
            return
        }

        if (isLogin) {

            setmodalstate(true);

            let res = await fetch("https://student-support-s0xt.onrender.com/Contactinfo", {

                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            })

            let result = await res.json();

            setmodalstate(false)

            setserverinfo(result.message);
        }
        else {
            setchecklogin(true);
        }

    }


    return (
        <>
            <div className="flex justify-center mb-8">
                <div className="flex flex-col sm:flex-row w-screen  xl:w-9/12 lg:w-11/12 md:w-11/12 h-auto rounded-xl border pb-5">

                    <div className="flex flex-col h-auto w-full px-10 mt-10">
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

                    <div className="flex flex-col h-auto w-full pt-16 sm:pt-24 px-10">

                        <label htmlFor="name" >Name </label>

                        <input onChange={handlechange} type="text" id="name" name="name" className="border mt-1 mb-4 h-10 rounded-md pl-2 block text-sm" placeholder='Enter your Name' />

                        <label htmlFor="Email" >Email </label>

                        <input onChange={handlechange} type="Email" id="Email" name="Email" className="border mt-1 mb-4   h-10 rounded-md pl-2 block text-sm" placeholder="Enter your Email id" />

                        <label htmlFor="service">What service are you interested in </label>

                        <select onChange={handlechange} name="service" id="service" className="pl-2 h-10 opacity-75 mt-1 mb-4 border rounded-md text-sm">
                            <option value="select">Select option </option>
                            <option value="Build Project">Build Project</option>
                            <option value="Buy Project">Buy Project</option>
                            <option value="Research Paper">Research Paper</option>
                            <option value="IOT Project">IOT Project</option>
                            <option value="Guidance about Project">Guidance about Project</option>
                            <option value="others">others</option>

                        </select>

                        <label htmlFor="Budget" className="block">Budget </label>

                        <select onChange={handlechange} name="Budget" id="Budget" className="pl-2 h-10 mt-1 mb-4 opacity-75 border rounded-md text-sm">
                            <option value="choose amount">choose amount</option>
                            <option value="500">Less than 500</option>
                            <option value="800">Less than 800</option>
                            <option value="1000">Less than 1000</option>
                            <option value="1200">Less than 1200</option>
                            <option value="1500">Less than 1500</option>
                            <option value="will decide">will decide while talking</option>

                        </select>

                        <label htmlFor="message" className="block">Message </label>

                        <textarea onChange={handlechange} name="text" id="text" placeholder="write what you want to ask about..." className="text-sm  pl-3 pt-2 mt-1 mb-4 min-h-28 border rounded-md"></textarea>

                        {error && (
                        <p className="text-red-500 text-sm font-normal  mb-4">{error}</p>
                        )}

                        <button type="button" onClick={handlesubmit} className="bg-black text-white block h-10 rounded-md mb-4">Submit</button>

                    </div>

                </div>

            </div>

            <h1 className="text-center text-green-500 font-semibold text-lg mb-10">{serverinfo}</h1>

            <ModalLoading isOpen={modalstate} onClose={() => setmodalstate(false)}>
                <div className="flex justify-center items-center z-50 ">
                    <div className="w-12 h-12 border-4  border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </ModalLoading>

            <ModalLogin isOpen={checklogin} onClose={() => setchecklogin(false)}>
                <div>
                    <div className="flex flex-col px-2 gap-3">

                        <h1 className="text-black opacity-75 font-bold text-2xl text-center">Login Please..!</h1>

                        <p className="text-gray-700 text-lg">Please login to Book the your session to discuss</p>

                        <Link to={`/Login`} className="py-2 px-2 block text-center border rounded-lg hover:bg-black hover:text-white">Go to Login</Link>

                    </div>
                </div>
            </ModalLogin>

        </>
    )
}
