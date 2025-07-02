import { IoPersonAddOutline } from "react-icons/io5";



export default function Login() {
    return (
        <div className="mx-auto w-full pt-32 mb-20">
            <div className="mx-auto flex flex-row rounded-lg border bg-white w-[75vw] shadow-md">

                <div className="w-96 rounded-l-lg bg-green-50  h-[600px]">

                    <div className="flex py-10 px-10 items-center gap-2">
                        <button className="border-4 w-7 h-7 rounded-full border-blue-700"></button>

                        <h1 className="text-xl font-semibold tracking-wider">Student Support</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap gap-2 mt-8 items-center">
                            <button className="border-2 w-7 h-7 ml-10  rounded-full border-blue-400">✓</button>
                            <h1 className="text-lg font-semibold tracking-wide">Login</h1>
                        </div>
                        <p className="text-gray-700 ml-[76px] mt-1 text-base pr-10">login to student support to unlock all the features</p>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-wrap gap-2 mt-8 items-center">
                            <button className="border-2 w-7 h-7 ml-10  rounded-full border-blue-400">✓</button>
                            <h1 className="text-lg font-semibold tracking-wide">Signup</h1>
                        </div>
                        <p className="text-gray-700 ml-[76px] mt-1 text-base pr-10">signup to student support to get our membership of the our community</p>
                    </div>
                </div>

                <div className="mx-auto">
                    <IoPersonAddOutline size={30} className="mt-24 ml-44" />
                    <h1 className="tracking-wider font-semibold text-xl text-center">Login</h1>

                    <p className="text-sm text-gray-700 text-center mt-1">Please Enter the valid details below</p>

                    <form action="submit" className="flex flex-col gap-1">

                        <label htmlFor="name" className="mt-8 font-semibold">Username</label>
                        <input type="text" id="name" className="pl-3 rounded-sm w-96 h-10 border" />

                        <label htmlFor="password" className="mt-4 font-semibold">Password</label>
                        <input type="password" id="password" className="pl-3 rounded-sm w-96 h-10 border" />

                        <button className="w-96 h-10 mt-6 bg-blue-500 rounded-sm">Login</button>

                        <p className="text-black text-center mt-6">Can't login? <span className="text-blue-800 cursor-pointer">Create an Account</span></p>

                    </form>
                </div>

            </div>
        </div>
    )
}