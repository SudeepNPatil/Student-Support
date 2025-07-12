import React from "react"
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function AdminLogin() {


    return (

        <div className="xl:w-[67%] sm:w-[58%] w-[70%] mt-20  sm:my-0  xl:px-40 lg:px-20 md:px-16 sm:px-14 mx-auto">

            <IoPersonAddOutline size={30} className="mx-auto mt-24" />

            <h1 className="tracking-wider font-semibold text-xl text-center mt-2"> Admin Login</h1>

            <p className="text-sm text-gray-700 text-center mt-2">Please Enter the valid details below</p>

            <form className="flex flex-col gap-1 flex-wrap max-w-md mx-auto">

                <label htmlFor="name" className="mt-8 font-semibold">Username</label>
                <input type="text" id="name" name="email" className="pl-3 rounded-md  h-10 border" />

                <label htmlFor="password" className="mt-4 font-semibold">Password</label>
                <input type="password" id="password" name="password" className="pl-3 rounded-md  h-10 border" />

                <Link to="/AdminDashboard" type="button" className="h-10 mt-6 text-center pt-1.5 bg-blue-500 rounded-md">Login</Link>

            </form>
        </div>

    )
}