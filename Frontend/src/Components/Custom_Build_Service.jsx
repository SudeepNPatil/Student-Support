import { FcIdea } from 'react-icons/fc';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import ModalLogin from '../Modals/ModalLogin';
import { Link } from 'react-router-dom';
import ModalLoading from '../Modals/ModalLoading';

export default function Custom_Build_Service() {
  const { isLogin, data: userData } = useContext(LoginContext);
  const [modal, setmodal] = useState(false);
  const [error, seterror] = useState('');
  const [saveddata, setsaveddata] = useState(null);
  const [modalloding, setmodalloding] = useState(false);

  const [Custom, setCustom] = useState({
    unic: userData?.email,
    name: '',
    Phnumber: '',
    Email: '',
    describe: '',
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    setCustom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!Custom.name || !Custom.Phnumber || !Custom.Email || !Custom.describe) {
      seterror('⚠️ Please fill all the details.');
      return;
    } else {
      seterror('');
    }

    if (isLogin) {
      setmodalloding(true);

      await fetch(
        'https://student-support-s0xt.onrender.com/CustomBuildService',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...Custom, unic: userData?.email }),
        }
      )
        .then((data) => data.json())
        .then((data) => {
          setsaveddata(data);
          setmodalloding(false);
          setCustom({
            name: '',
            Phnumber: '',
            Email: '',
            describe: '',
            unic: userData?.email,
          });
        });
    } else {
      setmodal(true);
    }
  };

  const handlcancel = async (email) => {
    setmodalloding(true);
    const res = await fetch(
      `https://student-support-s0xt.onrender.com/CustomBuildService/${email}`,
      {
        method: 'DELETE',
      }
    );

    const returnedinfo = await res.json();

    setmodalloding(false);
    setsaveddata({});
    alert(returnedinfo.message);
  };

  return (
    <>
      {/* Mobile View */}

      <div className="pt-28 flex flex-col bg-blue-100 pb-5 rounded-md sm:hidden">
        <h1 className="text-xl text-center font-bold">
          Bring Your Project Idea to Life
        </h1>

        <p className="text-gray-700 mt-2 text-center w-[80vw] self-center ">
          Share your project idea and let our team build it for you on time,
          with the best technology stack.
        </p>
      </div>

      <div className="flex flex-col items-center mt-5 flex-wrap sm:hidden">
        <form
          onSubmit={handlesubmit}
          className="flex flex-col flex-wrap lg:p-14"
        >
          <label htmlFor="Name">Name :</label>
          <input
            required
            onChange={handlechange}
            type="text"
            id="Name"
            name="name"
            value={Custom.name}
            placeholder="Enter your Full Name"
            className="border rounded-md text-sm h-8 pl-2 mb-4 mt-2 w-[80vw]"
          />
          <label htmlFor="number">Phone Number :</label>
          <input
            required
            onChange={handlechange}
            type="number"
            id="number"
            name="Phnumber"
            value={Custom.Phnumber}
            placeholder="Enter your phone Number"
            className="border  rounded-md h-8 pl-2 mb-4 mt-2 text-sm w-[80vw]"
          />
          <label htmlFor="Email">Email :</label>
          <input
            required
            onChange={handlechange}
            type="text"
            id="Email"
            name="Email"
            value={Custom.Email}
            placeholder="Enter email id"
            className="border  rounded-md text-sm w-[80vw] mb-4 mt-2 h-8 pl-2 "
          />
          <label htmlFor="textarea">Describe your idea :</label>
          <textarea
            required
            onChange={handlechange}
            name="describe"
            id="textarea"
            value={Custom.describe}
            placeholder="describe your Project idea here..."
            className="w-[80vw] border mb-4 mt-2 pl-2 h-20 rounded-md text-sm"
          ></textarea>

          {error && (
            <p className="text-red-500 text-sm font-normal  mb-4">{error}</p>
          )}

          <button
            type="submit"
            className="bg-black text-white text-center  rounded-md h-8 text-sm w-[80vw]"
          >
            Submit
          </button>
        </form>

        <div className="w-[80vw] border h-auto rounded-md mt-10 mb-10">
          {saveddata?.data ? (
            <div className="flex flex-col h-full justify-center gap-3 flex-wrap w-full mt-10 mb-10">
              <h1 className="pl-8 text-lg text-black font-bold">
                Your Information
              </h1>
              <h1 className="pl-8 mt-5">Name : {saveddata?.data?.name}</h1>
              <p className="pl-8">Phnumber : {saveddata?.data?.Phnumber}</p>
              <p className="pl-8">Email : {saveddata?.data.Email}</p>
              <p className="pl-8">describe : {saveddata?.data.describe}</p>
              <p className="text-green-500 pl-8 w-[95%] text-base font-semibold mt-3">
                {saveddata?.message}
              </p>
              <h1 className="text-lg text-black bg-[#00000005] rounded-lg py-2 w-56 mx-auto mt-8 text-center font-bold">
                Sesssion Booked
              </h1>

              <p
                onClick={() => handlcancel(userData?.email)}
                className="text-base mt-5 text-red-600 text-center hover:underline cursor-pointer"
              >
                Cancel Session
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-center">
              <FcIdea size={52} className="mt-14 self-center opacity-70" />
              <p className="text-sm text-center font-light opacity-65 mt-2">
                You are not submited your idea yet !
              </p>
            </div>
          )}
        </div>
      </div>

      <ModalLogin isOpen={modal} onClose={() => setmodal(false)}>
        <div className="flex flex-col px-2 gap-3">
          <h1 className="text-black opacity-75 font-bold text-2xl text-center">
            Login Please..!
          </h1>

          <p className="text-gray-700 text-lg">
            Please login to Book your service...
          </p>

          <Link
            to={`/Login`}
            className="py-2 px-2 block text-center border rounded-lg hover:bg-black hover:text-white"
          >
            Go to Login
          </Link>
        </div>
      </ModalLogin>

      <ModalLoading isOpen={modalloding} onClose={() => setmodalloding(false)}>
        <div className="flex justify-center items-center z-50 ">
          <div className="w-12 h-12 border-4  border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </ModalLoading>

      {/* Desktop view */}

      <div className="hidden xl:pt-28 xl: xl:flex xl:flex-col xl:bg-blue-100 xl:pb-5 rounded-md ">
        <h1 className="lg:text-2xl xl:text-4xl pt-5 text-center font-bold ">
          Bring Your Project Idea to Life
        </h1>

        <p className="text-gray-700 mt-3 text-center w-[80vw] self-center pb-5">
          Share your project idea and let our team build it for you on time,
          with the best technology stack.
        </p>
      </div>

      <div className="hidden xl:flex xl:gap-24 xl:flex-wrap justify-center xl:mt-12 mb-12">
        <div className="min-w-96 border p-2 rounded-[60px]">
          <form className="flex xl:flex-col xl:flex-wrap p-14 xl:min-w-[35vw]">
            <h1 className="text-center font-semibold text-xl -mt-2 mb-8">
              Fill the Details{' '}
            </h1>
            <label htmlFor="Name">Name :</label>
            <input
              required
              onChange={handlechange}
              type="text"
              id="Name"
              name="name"
              value={Custom.name}
              placeholder="Enter your Full Name"
              className="border rounded-md text-sm h-10 pl-2 mb-5 mt-2"
            />
            <label htmlFor="number">Phone Number :</label>
            <input
              required
              onChange={handlechange}
              type="number"
              id="number"
              name="Phnumber"
              value={Custom.Phnumber}
              placeholder="Enter your phone Number"
              className="border  rounded-md h-10  pl-2 mb-5 mt-2 text-sm "
            />
            <label htmlFor="Email">Email :</label>
            <input
              required
              onChange={handlechange}
              type="text"
              id="Email"
              name="Email"
              value={Custom.Email}
              placeholder="Enter email id"
              className="border  rounded-md text-sm mb-5 mt-2 h-10 pl-2 "
            />
            <label htmlFor="textarea">Describe your idea :</label>
            <textarea
              required
              onChange={handlechange}
              name="describe"
              id="textarea"
              value={Custom.describe}
              placeholder="describe your Project idea here..."
              className="border mb-8 mt-2 pl-2 h-24 rounded-md text-sm"
            ></textarea>

            {error && (
              <p className="text-red-500 text-sm font-normal  mb-4">{error}</p>
            )}

            <button
              onClick={handlesubmit}
              className="bg-black text-white text-center  rounded-md h-10 text-sm"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="max-w-96 border rounded-[60px] xl:min-w-[35vw] block box-border">
          {saveddata?.data ? (
            <div className="flex flex-col h-full justify-center gap-3 flex-wrap w-full">
              <h1 className="pl-8 text-xl text-black font-bold">
                Your Information
              </h1>
              <h1 className="pl-8 mt-5">Name : {saveddata?.data?.name}</h1>
              <p className="pl-8">Phnumber : {saveddata?.data?.Phnumber}</p>
              <p className="pl-8">Email : {saveddata?.data.Email}</p>
              <p className="pl-8">Describe : {saveddata?.data.describe}</p>
              <p className="text-green-500 pl-5 w-[95%] text-center  text-lg font-semibold mt-3">
                {saveddata?.message}
              </p>
              <h1 className="text-xl text-black bg-[#00000005] rounded-lg py-2 w-56 mx-auto mt-8 text-center font-bold">
                Sesssion Booked
              </h1>

              <p
                onClick={() => handlcancel(userData?.email)}
                className="text-base mt-5 text-red-600 text-center hover:underline cursor-pointer"
              >
                Cancel Session
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-center items-center mt-48">
                <FcIdea size={100} className="opacity-60" />
              </div>
              <p className="text-md font-light opacity-65 mt-2 text-center">
                You are not submited your idea yet !
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
