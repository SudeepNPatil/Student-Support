import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { IoNotifications } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa6';
import { FaRegEye } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { RiEditBoxFill } from 'react-icons/ri';

export default function Session() {
  let count = 0;
  let users = [
    {
      Name: 'Sudeep Patil',
      email: 'Sudeepbsc02@gail.com',
      date: '02/10/2025',
      time: '12:35 am',
      role: 'user',
    },
    {
      Name: 'Sudeep Patil',
      email: 'Sudeepbsc02@gail.com',
      date: '02/10/2025',
      time: '12:35 am',
      role: 'user',
    },
    {
      Name: 'Sudeep Patil',
      email: 'Sudeepbsc02@gail.com',
      date: '02/10/2025',
      time: '12:35 am',
      role: 'user',
    },
    {
      Name: 'Sudeep Patil',
      email: 'Sudeepbsc02@gail.com',
      date: '02/10/2025',
      time: '12:35 am',
      role: 'user',
    },
    {
      Name: 'Sudeep Patil',
      email: 'Sudeepbsc02@gail.com',
      date: '02/10/2025',
      time: '12:35 am',
      role: 'user',
    },
    {
      Name: 'Sudeep Patil',
      email: 'Sudeepbsc02@gail.com',
      date: '02/10/2025',
      time: '12:35 am',
      role: 'user',
    },
    {
      Name: 'Sudeep Patil',
      email: 'Sudeepbsc0s2@gail.com',
      date: '02/10/2025',
      time: '12:35 am',
      role: 'user',
    },
  ];

  return (
    <div className="flex flex-col flex-1 h-screen overflow-auto">
      <div className="flex felx-row justify-between px-14 border-b py-8">
        <h1 className="text-3xl font-bold ">Session</h1>
        <div className="flex flex-row items-center justify-center gap-6">
          <IoNotifications className="text-3xl mt-1" />
          <BsPersonCircle className="text-4xl " />
        </div>
      </div>

      <div className="flex flex-col flex-grow mx-14 my-14 rounded-t-2xl border h-auto ">
        <div className="flex flex-row justify-between items-center w-full  px-8 py-8">
          <div className="flex flex-row  items-center gap-5 ">
            <FaUsers className="text-6xl text-green-500 p-3 text-opacity-70 rounded-md bg-green-50" />
            <h1 className="text-2xl font-bold">All Users</h1>
          </div>
          <p className="text-2xl text-black font-bold bg-opacity-75">
            total users : <span className="text-green-500">{users.length}</span>
          </p>
        </div>
        <table className="text-center border-collapse">
          <tr className="h-20">
            <th className="border w-20">Sl.No</th>
            <th className="border w-80">Name and Email</th>
            <th className="border w-50">Date and Time</th>
            <th className="border w-28">Role</th>
            <th className="border w-60">Actions</th>
          </tr>
          {users.map((user, index) => {
            count++;
            return (
              <tr key={index} className="border h-20">
                <td className="border">{count}</td>
                <td className="flex flex-col items-start justify-center px-10 gap-1 py-4">
                  <p className="text-[18px]">{user.Name}</p>
                  <p className="text-sm">{user.email}</p>
                </td>
                <td className="border ">
                  <span className="block pr-5">{user.date}</span>
                  <span className="block pr-9">{user.time}</span>
                </td>
                <td className="border ">
                  <span className="bg-green-100 px-4 py-1 rounded-lg">
                    {user.role}
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
      </div>
    </div>
  );
}
