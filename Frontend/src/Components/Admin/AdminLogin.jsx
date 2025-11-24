import React, { useState } from 'react';
import { IoPersonAddOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import ModalLoading from '../../Modals/ModalLoading';
import ModalSignup from '../../Modals/ModalSignup';
import { TbLockOpen } from 'react-icons/tb';

export default function AdminLogin() {
  const [loadingmodal, setloadingmodal] = useState(false);
  const [ismodalopen, setmodalopen] = useState(false);
  const [admindata, setadmindata] = useState({
    name: '',
    password: '',
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setadmindata((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloadingmodal(true);

    const response = await fetch(
      'https://student-support-s0xt.onrender.com/admin',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(admindata),
      }
    );

    const result = await response.json();

    console.log(result);
    if (response.status == 200) {
      setloadingmodal(false);
      setmodalopen(true);
    }
  };

  return (
    <div className="xl:w-[67%] sm:w-[58%] w-[70%] mt-20  sm:my-0  xl:px-40 lg:px-20 md:px-16 sm:px-14 mx-auto">
      <IoPersonAddOutline size={30} className="mx-auto mt-24" />

      <h1 className="tracking-wider font-semibold text-xl text-center mt-2">
        {' '}
        Admin Login
      </h1>

      <p className="text-sm text-gray-700 text-center mt-2">
        Please Enter the valid details below
      </p>

      <form className="flex flex-col gap-1 flex-wrap max-w-md mx-auto">
        <label htmlFor="name" className="mt-8 font-semibold">
          Username
        </label>
        <input
          onChange={handlechange}
          type="text"
          id="name"
          name="name"
          className="pl-3 rounded-md  h-10 border"
        />

        <label htmlFor="password" className="mt-4 font-semibold">
          Password
        </label>
        <input
          onChange={handlechange}
          type="password"
          id="password"
          name="password"
          className="pl-3 rounded-md  h-10 border"
        />

        <Link
          onClick={handlesubmit}
          type="button"
          className="h-10 mt-6 text-center pt-1.5 bg-blue-500 rounded-md"
        >
          Login
        </Link>
      </form>

      <ModalLoading
        isOpen={loadingmodal}
        onClose={() => setloadingmodal(false)}
      >
        <div className="flex justify-center items-center z-50 ">
          <div className="w-12 h-12 border-4  border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </ModalLoading>

      <ModalSignup isOpen={ismodalopen} onClose={() => setmodalopen(false)}>
        <div className="flex flex-col justify-center">
          <TbLockOpen className="text-6xl font-extrabold mb-5 text-green-500 self-center p-2 rounded-lg bg-green-100" />
          <h1 className="text-xl text-center font-semibold">
            Loged in successfully✅
          </h1>

          <p className="text-gray-700 text-base text-center mt-2">
            Now you an access all the features of admin panal
          </p>
          <Link
            to="/AdminDashboard/Dashboard"
            className="px-10 py-2 rounded-lg mt-5 bg-black bg-opacity-80 text-white text-center mx-auto"
          >
            Go to Main
          </Link>
        </div>
      </ModalSignup>
    </div>
  );
}
