import React, { useEffect, useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { IoNotifications } from 'react-icons/io5';
import { FaBox } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import { FaBagShopping } from 'react-icons/fa6';
import { FaRupeeSign } from 'react-icons/fa6';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa6';

export default function Dashboard() {
  const [data, setdata] = useState('');

  useEffect(() => {
    fetch('https://student-support-s0xt.onrender.com/admin')
      .then((data) => data.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <div className="flex flex-col flex-1 h-screen overflow-scroll">
      <div className="flex felx-row justify-between px-14 border-b py-8">
        <h1 className="text-3xl font-bold ">Dashboard</h1>
        <div className="flex flex-row items-center justify-center gap-5">
          <IoNotifications className="text-2xl" />
          <IoPersonOutline className="text-4xl p-2 bg-red-500 bg-opacity-60  rounded-[28px]" />
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-between px-16 mt-16">
        <div className="flex flex-row justify-between gap-5 items-center p-8 rounded-xl border ">
          <FaBox className="text-7xl p-5 bg-red-50 rounded-[26px] text-red-500 text-opacity-70" />

          <div className="flex flex-col items-end gap-2">
            <p className="text-3xl font-bold">{data?.data?.projectcount}</p>
            <p className="text-gray-700 text-lg font-semibold">
              Total Products
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-5 items-center p-8 rounded-xl border ">
          <FaBagShopping className="text-7xl p-5 bg-yellow-50 rounded-[26px] text-yellow-500 text-opacity-70" />

          <div className="flex flex-col items-end gap-2">
            <p className="text-3xl font-bold">
              {data?.data?.totalorders[0]?.totalorders}
            </p>
            <p className="text-gray-700 text-lg font-semibold">Total Orders</p>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-5 items-center p-8 rounded-xl border ">
          <FaRupeeSign className="text-7xl p-5 bg-blue-50 rounded-[26px] text-blue-500 text-opacity-70" />

          <div className="flex flex-col items-end gap-2">
            <p className="text-3xl font-bold">
              {' '}
              <FaIndianRupeeSign className="text-2xl inline-block" /> 00
            </p>
            <p className="text-gray-700 text-lg font-semibold">Total Revenue</p>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-5 items-center p-8 rounded-xl border mt-10">
          <FaUsers className="text-7xl p-5 bg-green-50 rounded-[26px] text-green-500 text-opacity-70" />

          <div className="flex flex-col items-end gap-2">
            <p className="text-3xl font-bold">{data?.data?.userscount}</p>
            <p className="text-gray-700 text-lg font-semibold">Total Users</p>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-5 items-center p-8 mx-16 rounded-xl border mt-10 flex-grow">
          <FaClock className="text-7xl p-5 bg-orange-50 rounded-[26px] text-orange-500 text-opacity-70" />

          <div className="flex flex-col items-end gap-2">
            <p className="text-3xl font-bold">8</p>
            <p className="text-gray-700 text-lg font-semibold">
              Pending Orders
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between mx-20  items-center rounded-xl border mt-10 flex-grow mb-10">
        <div className="flex flex-row justify-between w-full border-b px-8 py-8">
          <div className="flex flex-row justify-center  items-center gap-5">
            <FaBagShopping className="text-2xl text-pink-500 text-opacity-70" />
            <h1 className="text-2xl font-bold">Recent Orders</h1>
          </div>

          <button className="text-center px-5 py-2 hover:bg-red-500 hover:bg-opacity-70 hover:text-black  border-red-500 border-opacity-80 rounded-xl border text-red-500 text-opacity-80">
            View All
          </button>
        </div>

        <div className="flex flex-col h-40 pt-20 font-semibold text-gray-700">
          No orders Yet
        </div>
      </div>
    </div>
  );
}
