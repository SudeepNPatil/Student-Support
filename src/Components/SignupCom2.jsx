import React from "react";
import { LuLockKeyhole } from "react-icons/lu";

export default function SignupCom2() {
    return (
        <div className="mx-auto pt-16 pb-28">
            <LuLockKeyhole size={30} className="mt-16 ml-44 border rounded-md px-1 py-1" />
            <h1 className=" font-bold text-2xl text-center opacity-85 mt-4">Choose a password</h1>

            <p className="text-sm text-gray-700 text-center mt-2">Must be at least 8 characters</p>

            <form action="submit" className="flex flex-col gap-1">

                <label htmlFor="name" className="mt-8 font-semibold">Password</label>
                <input type="text" id="name" className="pl-3 rounded-md w-96 h-10 border" />

                <label htmlFor="confirm" className="mt-4 font-semibold">Confirm password</label>
                <input type="password" id="confirm" className="pl-3 rounded-md w-96 h-10 border" />

                <button className="w-96 h-10 mt-6 bg-blue-500 rounded-md font-semibold">Complete signup</button>

            </form>
        </div>
    )
}