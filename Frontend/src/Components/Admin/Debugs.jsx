import React, { useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { IoNotifications } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa6';
import { FaRegEye } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { RiEditBoxFill } from 'react-icons/ri';

export default function Debugs() {
  let count = 0;
  const [Debugs, setDebugs] = useState([]);

  useEffect(() => {
    fetch('https://student-support-s0xt.onrender.com/DebugAndRescue/debugs')
      .then((data) => data.json())
      .then((data) => setDebugs(data.debugs));
  }, []);

  return (
    <>
      <div className="flex flex-col flex-1 h-screen overflow-auto">
        <div className="flex felx-row justify-between px-14 border-b py-8">
          <h1 className="text-3xl font-bold ">Debugs</h1>
          <div className="flex flex-row items-center justify-center gap-6">
            <IoNotifications className="text-3xl mt-1" />
            <BsPersonCircle className="text-4xl " />
          </div>
        </div>

        <div className="flex flex-col flex-grow mx-14 my-14 rounded-t-2xl border h-auto ">
          <div className="flex flex-row justify-between items-center w-full  px-8 py-8 border-b">
            <div className="flex flex-row  items-center gap-5 ">
              <FaUsers className="text-6xl text-green-500 p-3 text-opacity-70 rounded-md bg-green-50" />
              <h1 className="text-2xl font-bold">All debugs</h1>
            </div>
            <p className="text-2xl text-black font-bold bg-opacity-75">
              total debugs :{' '}
              <span className="text-green-500">{Debugs.length}</span>
            </p>
          </div>
          {Debugs.length > 0 ? (
            <table className="text-center border-collapse">
              <tr className="h-20">
                <th className="border w-20">Sl.No</th>
                <th className="border w-80">User info</th>
                <th className="border w-28">Date & Time of debugs</th>
                <th className="border w-50">description</th>
                <th className="border w-60">Actions</th>
              </tr>
              {Debugs.map((Debug, index) => {
                count++;
                return (
                  <tr key={index} className="border h-20">
                    <td className="border">{count}</td>
                    <td className="flex flex-col items-start justify-center px-10 gap-1 py-4">
                      <p className="text-[18px]">{Debug.name}</p>
                      <p className="text-sm">{Debug.email}</p>
                      <p className="text-sm">{Debug.whatsapp}</p>
                    </td>
                    <td className="border">
                      <span className="block text-center">
                        {Debug.createdAt.slice(0, 10)}
                      </span>
                      <span className="block ">
                        {Debug.createdAt.slice(11, 19)}
                      </span>
                    </td>
                    <td className="border ">
                      <span className="px-4 py-1 rounded-lg">
                        {Debug.describe}
                      </span>
                    </td>
                    <td className="border">
                      <FaRegEye className="text-4xl p-2 rounded-lg bg-green-50 text-green-500 text-opacity-70 inline-block mx-1" />
                      <RiEditBoxFill className="text-4xl p-2 rounded-lg bg-blue-50 text-blue-500 text-opacity-70 inline-block mx-1" />
                      <AiFillDelete className="text-4xl p-2 rounded-lg bg-red-50 text-red-500 bg-opacity-90 inline-block mx-1" />
                    </td>
                  </tr>
                );
              })}
            </table>
          ) : (
            <div className="flex justify-center items-center h-full text-xl text-gray-700">
              No Debugs yet
            </div>
          )}
        </div>
      </div>
    </>
  );
}
