import React, { useEffect, useRef, useState } from 'react';
import { LuLockKeyhole } from 'react-icons/lu';

export default function SignupCom2({
  formData,
  handleChange,
  handlesubmit,
  validate,
  setvalidate,
}) {
  const [indicate, setindicate] = useState('');
  const [confirm, setconfirm] = useState('');
  const hasrendered = useRef(false);
  const getpassword = (e) => {
    let value = e.target.value;
    setconfirm(value);
  };

  useEffect(() => {
    if (formData.password.length > 0 && formData.password == confirm) {
      setindicate('Password matched');
      setvalidate('');
      hasrendered.current = true;
    }
    if (formData.password != confirm && hasrendered.current) {
      setindicate('Password missmatch');
    }
  }, [confirm]);

  return (
    <div className="xl:w-96 lg:w-[62%] md:w-[60%] sm:w-[60%] w-[100vw] mx-auto pt-16 pb-28 xl:px-0 lg:px-20 md:px-14 sm:px-12 px-12 mt-0 sm:mt-14">
      <LuLockKeyhole
        size={30}
        className="mt-16 mx-auto border rounded-md px-1 py-1"
      />
      <h1 className="font-bold text-2xl text-center opacity-85 mt-4">
        Choose a password
      </h1>

      <p className="text-sm text-gray-700 text-center mt-2">
        Must be at least 8 characters
      </p>

      <form className="flex flex-col gap-1">
        <label htmlFor="name" className="mt-8 font-semibold">
          Password
        </label>
        <input
          type="text"
          id="name"
          name="password"
          value={formData.password}
          className="pl-3 rounded-md h-10 border"
          onChange={handleChange}
        />

        <label htmlFor="confirm" className="mt-4 font-semibold">
          Confirm password
        </label>
        <input
          type="password"
          id="confirm"
          name="password"
          value={confirm}
          className="pl-3 rounded-md h-10 border"
          onChange={getpassword}
        />

        {indicate && (
          <p
            className={`${
              formData.password == confirm ? 'text-green-500' : 'text-red-500'
            } text-[10px] my-1`}
          >
            {indicate}
          </p>
        )}

        {validate && <p className="text-red-500 text-sm my-2">{validate}</p>}

        <button
          className="h-10 mt-6 bg-blue-500 rounded-md font-semibold"
          onClick={(e) => {
            e.preventDefault();

            handlesubmit();
          }}
        >
          Complete signup
        </button>
      </form>
    </div>
  );
}
