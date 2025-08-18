import { FcIdea } from "react-icons/fc";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import ModalLogin from "../Modals/ModalLogin";
import { Link } from "react-router-dom";


export default function Custom_Build_Service() {

    const [Custom, setCustom] = useState({
        name: "",
        Phnumber: "",
        Email: "",
        Describe: "",
    })
     const { isLogin } = useContext(LoginContext);
    
         const [modal ,setmodal] = useState(false)

    const handlechange = (e) => {
        const { name, value } = e.target;

        setCustom((prev) => ({
            ...prev,
            [name]: value
        }))

    }


    const handlesubmit = async (e) => {

        e.preventDefault();

        if(isLogin){

        await fetch("https://student-support-s0xt.onrender.com/CustomBuildService", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Custom)
        })
            .then((data) => data.json())
            .then((data) => console.log(data));
    
    }
    else{
        setmodal(true);
    }

    }


    return (
        <>

            {/* Mobile View */}

            <div className="pt-28 flex flex-col bg-blue-100 pb-5 rounded-md sm:hidden">
                <h1 className="text-xl text-center font-bold">Bring Your Project Idea to Life</h1>

                <p className="text-gray-700 mt-2 text-center w-[80vw] self-center ">Share your project idea and let our team build it for you on time, with the best technology stack.</p>
            </div>

            <div className="flex flex-col items-center mt-5 flex-wrap sm:hidden">
                <form className="flex flex-col flex-wrap lg:p-14">
                    <label htmlFor="Name">Name :</label>
                    <input type="text" id="Name" placeholder="Enter your Full Name" className="border rounded-md text-sm h-8 pl-2 mb-4 mt-2 w-[80vw]" />
                    <label htmlFor="number">Phone Number :</label>
                    <input type="number" id="number" placeholder="Enter your phone Number" className="border  rounded-md h-8 pl-2 mb-4 mt-2 text-sm w-[80vw]" />
                    <label htmlFor="Email">Email :</label>
                    <input type="text" id="Email" placeholder="Enter email id" className="border  rounded-md text-sm w-[80vw] mb-4 mt-2 h-8 pl-2 " />
                    <label htmlFor="textarea">Describe your idea :</label>
                    <textarea name="textarea" id="textarea" placeholder="describe your Project idea here..." className="w-[80vw] border mb-4 mt-2 pl-2 h-20 rounded-md text-sm"></textarea>
                    <button className="bg-black text-white text-center  rounded-md h-8 text-sm w-[80vw]">Submit</button>
                </form>

                <div className="w-[80vw] border h-52 rounded-md mt-10">
                    <div className="flex flex-col justify-center">
                        <FcIdea size={52} className="mt-14 self-center opacity-70" />
                        <p className="text-sm text-center font-light opacity-65 mt-2">You are not submited your idea yet !</p>
                    </div>
                </div>

            </div>


             <ModalLogin isOpen={modal} onClose={()=>setmodal(false)}>
                 <div className="flex flex-col px-2 gap-3">

                    <h1 className="text-black opacity-75 font-bold text-2xl text-center">Login Please..!</h1>

                    <p className="text-gray-700 text-lg">Please login to Book your service...</p>

                    <Link to={`/Login`} className="py-2 px-2 block text-center border rounded-lg hover:bg-black hover:text-white">Go to Login</Link>

                </div>
            </ModalLogin>

            {/* Desktop view */}

            <div className="hidden xl:pt-28 xl: xl:flex xl:flex-col xl:bg-blue-100 xl:pb-5 rounded-md ">
                <h1 className="lg:text-2xl xl:text-4xl pt-5 text-center font-bold ">Bring Your Project Idea to Life</h1>

                <p className="text-gray-700 mt-3 text-center w-[80vw] self-center pb-5">Share your project idea and let our team build it for you on time, with the best technology stack.</p>
            </div>

            <div className="hidden xl:flex xl:gap-24 xl:flex-wrap justify-center xl:mt-12 mb-12">

                <div className="min-w-96 border p-2 rounded-[60px]">

                    <form className="flex xl:flex-col xl:flex-wrap p-14 xl:min-w-[35vw]">
                        <h1 className="text-center font-semibold text-xl -mt-2 mb-8">Fill the Details </h1>
                        <label htmlFor="Name">Name :</label>
                        <input onChange={handlechange} type="text" id="Name" name="name" placeholder="Enter your Full Name" className="border rounded-md text-sm h-10 pl-2 mb-5 mt-2" />
                        <label htmlFor="number">Phone Number :</label>
                        <input onChange={handlechange} type="number" id="number" name="Phnumber" placeholder="Enter your phone Number" className="border  rounded-md h-10  pl-2 mb-5 mt-2 text-sm " />
                        <label htmlFor="Email">Email :</label>
                        <input onChange={handlechange} type="text" id="Email" name="Email" placeholder="Enter email id" className="border  rounded-md text-sm mb-5 mt-2 h-10 pl-2 " />
                        <label htmlFor="textarea">Describe your idea :</label>
                        <textarea onChange={handlechange} name="Describe" id="textarea" placeholder="describe your Project idea here..." className="border mb-8 mt-2 pl-2 h-24 rounded-md text-sm"></textarea>
                        <button onClick={handlesubmit} className="bg-black text-white text-center  rounded-md h-10 text-sm">Submit</button>
                    </form>

                </div>

                <div className="min-w-96 border text-center rounded-[60px] xl:min-w-[35vw]">
                    <div className="flex justify-center items-center mt-48">
                        <FcIdea size={100} className="opacity-60" />
                    </div>
                    <p className="text-md font-light opacity-65 mt-2">You are not submited your idea yet !</p>
                    <p></p>
                </div>

            </div>

        </>
    )
}