import React from 'react'
import logo from '../assets/logo-transparent.png'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import { HiOutlineDotsVertical } from "react-icons/hi";
import Modalmain from '../Modals/Modalmain';
import { HiChevronRight } from "react-icons/hi";
import ModalAccountinfo from '../Modals/ModalAccoutinfo';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const [isopen, setopen] = useState(false);

    const [isclicked, setisclicked] = useState(false);

    const [modal, setmodal] = useState(false);


    const { isLogin, setisLogin, data, setdata } = useContext(LoginContext);


    const clickfunction = function (e) {
        e.preventDefault();
        setopen(true)
    }

    const logout = async () => {
        await fetch("https://student-support-s0xt.onrender.com/logout", {
            credentials: "include"
        }).then(data => data.json()).then(data => console.log(data));

    };


    return (
        <div onClick={(e) => (e.stopPropagation(), setisclicked(false))} className="flex justify-between h-20 border-b fixed bg-white w-full z-50">

            <div className='flex '>
                <img src={logo} alt="logo" className='ml-2 rounded-full xl:ml-16 lg:ml-10 md:ml-6 sm:ml-4  w-16 h-16 mt-2 hover:scale-125 duration-500 ease-in-out cursor-pointer' />
                <h1 className='mt-7 ml-1 md:text-xl lg:text-2xl xs:text-lg font-bold lg:mt-6 lg:ml-2 hover:scale-105 duration-500 ease-in-out cursor-pointer'>STUDENT SUPPORT</h1>
            </div>

            <div className='hidden md:flex justify-end xl:gap-28 md:gap-12 lg:gap-16 items-center font-semibold mr-10'>
                <Link to='/Home' className='hover:text-yellow-400'>Home</Link >
                <Link to='/Project' className='hover:text-yellow-400'>Project</Link >
                <Link to='/Contact' className='hover:text-yellow-400'>Contact</Link >
                <Link to='/Admin' className='hover:text-yellow-400'>Admin</Link >
                {isLogin ?
                    <div className='flex flex-row justify-between sm:gap-2 lg:gap-5 items-center'>
                        <span className='rounded-full text-xl border flex flex-col justify-center w-12 h-12  bg-gray-100 text-center'>
                            {data.toUpperCase()}
                        </span>
                        <HiOutlineDotsVertical size={35} onClick={(e) => (e.stopPropagation(), setisclicked(true))} className='md:-mr-10 lg:-mr-6 text-gray-600 hover:bg-black/5 rounded-full p-1 cursor-pointer' />

                    </div>
                    :
                    <Link to='/login' className='hover:text-yellow-400'>login</Link>
                }

            </div>

            <Modalmain isOpen={isclicked} onClose={() => setisclicked(false)}></Modalmain>


            {/* mobile view */}

            <div className={`mt-5 bg-white border rounded-md px-5 pb-3 fixed right-0 transform transition-transform duration-300 ease-in-out ${isopen ? 'translate-x-0' : 'translate-x-full'} `}>
                <RxCross2 size={30} className='relative left-36 p-1' onClick={() => setopen(false)} />
                <div className='flex flex-col gap-4 w-auto scale-x-100 h-auto relative min-w-40 bg-white font-semibold rounded-sm'>
                    <Link to='/Home' className='w-auto h-auto block bg-[#00000002] py-3 px-2 rounded-xl hover:bg-blue-600'>Home</Link >
                    <Link to='/Project' className='w-auto h-auto block bg-[#00000002] py-3 px-2 rounded-xl hover:bg-blue-600 '>Project</Link >
                    <Link to='/Contact' className='w-auto h-auto block bg-[#00000002] py-3 px-2 rounded-xl hover:bg-blue-600 '>Contact</Link >
                    <Link to='/Admin' className='w-auto h-auto block bg-[#00000002] py-3 px-2 rounded-xl hover:bg-blue-600'>Admin</Link>
                    {isLogin ?
                        <div onClick={() => setmodal(true)} className='flex flex-row mt-2 hover:bg-blue-600 bg-[#00000004] justify-between px-2 py-2 rounded-xl items-center'>
                            <p className='text-center bg-blue-300 rounded-full w-7 h-7 text-[12px] pt-1'> {data}</p>
                            <p className='text-[12px]'>Account info</p>
                            <HiChevronRight className='text-base' />
                        </div>
                        :
                        <Link to='/login' className='w-auto h-auto block bg-[#00000002] py-3 px-2 rounded-xl hover:bg-blue-600'>login</Link >
                    }

                    <ModalAccountinfo isOpen={modal} onClose={() => setmodal(false)}>

                        <h1 className='text-sm border pl-5 mt-10 px-5 py-2 rounded-lg bg-[#00000002]  hover:border-blue-500'>
                            Account info
                        </h1>
                        <h1 className='text-sm border pl-5 mt-2 px-5 py-2 rounded-lg bg-[#00000002] hover:border-blue-500'>
                            Your Orders
                        </h1>
                        <Link onClick={logout} className='text-sm border pl-5 mt-2 px-5 py-2 rounded-lg bg-[#00000002] hover:border-red-500 hover:shadow-inner hover:shadow-red-300'>
                            Logout
                        </Link>

                    </ModalAccountinfo>

                </div>
            </div>

            <button className='md:hidden border-2 bg-gray-50 rounded-md w-10 block h-10 text-center text-3xl pl-1 mr-4 mt-5' onClick={clickfunction}>
                <RxHamburgerMenu />
            </button>



        </div>
    )
}