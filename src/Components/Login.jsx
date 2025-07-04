import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";



export default function Login() {
    return (

        <div className="mx-auto flex flex-col justify-center items-center sm:flex-row rounded-lg bg-white xl:w-[75vw] lg:w-[85vw] sm:w-[100vw] lg:border relative">

            <Link to={`/Home`}><GoArrowLeft size={30} className="hidden sm:block sm:absolute top-0 lg:-left-9 sm:left-0 border rounded-full" /></Link>

            <div className="xl:w-[33%] sm:w-[38%] hidden sm:block rounded-l-lg bg-green-50  h-[580px]">

                <div className="flex py-10 lg:px-10 md:px-6 sm:ml-2 sm:mt-6 md:mt-0 items-center gap-2 ">
                    <button className="border-4 w-7 h-7 rounded-full border-blue-700"></button>
                    <h1 className="text-xl font-semibold tracking-wider">Student Support</h1>
                </div>

                <div className="flex flex-col hover:bg-[#00000010] hover:rounded-3xl cursor-pointer ">
                    <div className="flex flex-wrap gap-2 mt-8 items-center">
                        <button className="border-2 w-7 h-7 lg:ml-10 md:ml-6 sm:ml-2  rounded-full border-blue-400">✓</button>
                        <h1 className="text-lg font-semibold tracking-wide">Login</h1>
                    </div>
                    <p className="text-gray-700 lg:ml-[76px] md:ml-[60px] sm:ml-[40px] mt-1 text-base lg:pr-10 sm:pr-3">login to student support to unlock all the features</p>
                </div>

                <Link to={`/Signup`} className="flex flex-col  hover:bg-[#00000010] hover:rounded-3xl cursor-pointer">
                    <div className="flex flex-wrap gap-2 mt-8 items-center">
                        <button className="border-2 w-7 h-7 lg:ml-10 md:ml-6 sm:ml-2 rounded-full border-blue-400">✓</button>
                        <h1 className="text-lg font-semibold tracking-wide">Signup</h1>
                    </div>
                    <p className="text-gray-700 lg:ml-[76px] md:ml-[60px] sm:ml-[40px] mt-1 text-base lg:pr-10 sm:pr-3">signup to student support to get our membership of the our community</p>
                </Link>
            </div>

            <div className="xl:w-[67%] sm:w-[58%] w-[70%] my-auto  sm:my-0  xl:px-40 lg:px-20 md:px-16 sm:px-14 mx-auto">

                <IoPersonAddOutline size={30} className="mx-auto mt-24" />

                <h1 className="tracking-wider font-semibold text-xl text-center mt-2">Login</h1>

                <p className="text-sm text-gray-700 text-center mt-2">Please Enter the valid details below</p>

                <form action="submit" className="flex flex-col gap-1 flex-wrap">

                    <label htmlFor="name" className="mt-8 font-semibold">Username</label>
                    <input type="text" id="name" className="pl-3 rounded-md  h-10 border" />

                    <label htmlFor="password" className="mt-4 font-semibold">Password</label>
                    <input type="password" id="password" className="pl-3 rounded-md  h-10 border" />

                    <button className="h-10 mt-6 bg-blue-500 rounded-md">Login</button>

                    <p className="text-black text-center mt-6">Can't login? <Link to={`/Signup`} className="text-blue-800 cursor-pointer">Create an Account</Link></p>

                </form>
            </div>

        </div>

    )
}