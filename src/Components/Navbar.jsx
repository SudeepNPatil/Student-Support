import React from 'react'
import logo from '../assets/logo-transparent.png'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';


export default function Navbar() {

    const [isopen, setopen] = useState(false);

    const clickfunction = function () {
        setopen(true)
    }


    return (
        <div className="flex justify-between h-20 border-b fixed bg-white w-full z-50">

            <div className='flex '>
                <img src={logo} alt="logo" className='ml-2 rounded-full lg:ml-16  w-16 h-16 mt-2 hover:scale-125 duration-500 ease-in-out cursor-pointer' />
                <h1 className='mt-7 ml-1 md:text-xl lg:text-2xl xs:text-lg font-bold lg:mt-6 lg:ml-2 hover:scale-105 duration-500 ease-in-out cursor-pointer'>STUDENT SUPPORT</h1>
            </div>

            <div className='hidden md:flex justify-end xl:gap-28 md:gap-12 lg:gap-16 items-center font-semibold mr-10'>
                <Link to='/Home' className='hover:text-yellow-400'>Home</Link >
                <Link to='/Project' className='hover:text-yellow-400'>Project</Link >
                <Link to='/Contact' className='hover:text-yellow-400'>Contact</Link >
                <Link to='/Admin' className='hover:text-yellow-400'>Admin</Link >
                <Link to='/login' className='hover:text-yellow-400'>login</Link>
            </div>


            <div className={`mt-5 bg-slate-100 fixed right-0 transform transition-transform duration-300 ease-in-out ${isopen ? 'translate-x-0' : 'translate-x-full'} `}>
                <RxCross2 size={30} className='relative left-32 p-1' onClick={() => setopen(false)} />
                <div className='flex flex-col w-auto scale-x-100 h-auto relative min-w-40 bg-slate-100 font-semibold rounded-sm'>
                    <Link to='/Home' className='p-2 w-auto h-auto block rounded-md hover:bg-blue-500 hover:text-yellow-400'>Home</Link >
                    <Link to='/Project' className='p-2 w-auto h-auto block rounded-md hover:bg-blue-500 hover:text-yellow-400'>Project</Link >
                    <Link to='/Contact' className='p-2 w-auto h-auto block rounded-md hover:bg-blue-500 hover:text-yellow-400'>Contact</Link >
                    <Link to='/Admin' className='p-2 w-auto h-auto block rounded-md hover:bg-blue-500 hover:text-yellow-400'>Admin</Link>
                    <Link to='/login' className='p-2 w-auto h-auto block rounded-md hover:bg-blue-500 hover:text-yellow-400'>login</Link >
                </div>
            </div>

            <button className='md:hidden border-2 bg-gray-50 rounded-md w-10 block h-10 text-center text-3xl pl-1 mr-4 mt-5' onClick={clickfunction}>
                <RxHamburgerMenu />
            </button>


        </div>
    )
}