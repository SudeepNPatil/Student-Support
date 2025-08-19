import { IoHourglassOutline } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { LoginContext } from '../Context/LoginContext';
import ModalLogin from '../Modals/ModalLogin';
import { Link } from 'react-router-dom';
import ModalLoading from '../Modals/ModalLoading.jsx';

export default function Project_Navigator() {
  const { isLogin } = useContext(LoginContext);
  const [modal, setmodal] = useState(false);
  const [modalloding, setmodalloding] = useState(false);
  const [error, seterror] = useState('');
  const [saveddata, setsaveddata] = useState({});

  const [Navigator, setNavigator] = useState({
    name: '',
    date: '',
    time: '',
    language: '',
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setNavigator((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (
      !Navigator.name ||
      !Navigator.date ||
      !Navigator.time ||
      !Navigator.language
    ) {
      seterror('⚠️ Please fill all the details.');
      return;
    } else {
      seterror('');
    }

    if (isLogin) {
      setmodalloding(true);

      await fetch(
        'https://student-support-s0xt.onrender.com/ProjectNavigator',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Navigator),
        }
      )
        .then((data) => data.json())
        .then((data) => {
          setsaveddata(data);
          setmodalloding(false);
          setNavigator({ name: '', date: '', time: '', language: '' });
        });
    } else {
      setmodal(true);
    }
  };

  return (
    <>
      <div className="pt-24 bg-green-100 pb-5 flex flex-col items-center xl:hidden">
        <h1 className="text-xl font-bold text-center ">Take Support From Us</h1>
        <p className="text-gray-700 mt-2 text-center w-[85vw]">
          Have an idea but don’t know where to start? We’ll guide you with tech
          stack, tools, deployment, and more!
        </p>
      </div>

      <div className="flex flex-col items-center mt-5 flex-wrap xl:hidden">
        <h1 className="font-semibold text-md">Book Session</h1>
        <form onSubmit={handlesubmit} className="flex flex-col flex-wrap mt-4">
          <label htmlFor="Name">Name :</label>
          <input
            required
            onChange={handlechange}
            type="text"
            id="Name"
            value={Navigator.name}
            name="name"
            placeholder="Enter your Full Name"
            className="border rounded-md text-sm h-8 pl-2 mb-4 w-[80vw] bg-gray-200"
          />
          <label htmlFor="Date">Date :</label>
          <input
            required
            onChange={handlechange}
            type="date"
            id="Date"
            name="date"
            value={Navigator.date}
            className="border  rounded-md h-8 pl-2 mb-4 opacity-70 text-sm w-[80vw] bg-gray-200"
          />
          <label htmlFor="Time">Time :</label>
          <input
            required
            onChange={handlechange}
            type="Time"
            id="Time"
            name="time"
            value={Navigator.time}
            placeholder="Enter email id"
            className="border  rounded-md text-sm w-[80vw] mb-4 h-8 pl-2 bg-gray-200"
          />
          <label htmlFor="select">Choose speaking language:</label>
          <select
            required
            onChange={handlechange}
            id="select"
            name="language"
            value={Navigator.language}
            className="w-[80vw] border mb-4 pl-2 mt-1 h-8 rounded-md text-sm bg-gray-200"
          >
            <option value="Select">Select</option>
            <option value="Kannada">Kannada</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>

          {error && (
            <p className="text-red-500 text-sm font-normal  mb-4">{error}</p>
          )}

          <button
            type="submit"
            className="bg-black text-white text-center  rounded-md h-8 text-sm w-[80vw]"
          >
            Book Now
          </button>
        </form>

        <div className="w-[80vw] border h-auto rounded-md mt-10 mb-10">
          {saveddata?.data ? (
            <div className="flex flex-col h-full justify-center gap-3 flex-wrap w-full mt-10 mb-10">
              <h1 className="pl-8 text-lg text-black font-bold">
                Your Information
              </h1>
              <h1 className="pl-8 mt-5">Name : {saveddata?.data?.name}</h1>
              <p className="pl-8">date : {saveddata?.data?.date}</p>
              <p className="pl-8">Time : {saveddata?.data.time}</p>
              <p className="pl-8">language : {saveddata?.data.language}</p>
              <p className="text-green-500 pl-8 w-[95%] text-base font-semibold mt-3">
                {saveddata?.message}
              </p>
              <h1 className="text-lg text-black bg-[#00000005] rounded-lg py-2 w-56 mx-auto mt-8 text-center font-bold">
                Sesssion Booked
              </h1>
            </div>
          ) : (
            <div className="flex flex-col justify-center">
              <IoHourglassOutline
                size={52}
                className="mt-14 self-center opacity-70 text-green-300"
              />
              <p className="text-sm text-center font-light opacity-65 mt-2">
                You are not Booked your Session yet !
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

      <div className="hidden xl:pt-28 xl: xl:flex xl:flex-col xl:bg-green-100 xl:pb-5 rounded-md ">
        <h1 className="lg:text-2xl xl:text-4xl pt-5 text-center font-bold ">
          Take Support From Us
        </h1>

        <p className="text-gray-700 mt-3 text-center w-[80vw] self-center pb-5">
          Have an idea but don’t know where to start? We’ll guide you with tech
          stack, tools, deployment, and more!
        </p>
      </div>

      <div className="hidden xl:flex xl:gap-24 xl:flex-wrap justify-center xl:mt-12 mb-12">
        <div className="min-w-96 border p-2 rounded-[60px]">
          <form
            onSubmit={handlesubmit}
            className="flex xl:flex-col xl:flex-wrap  p-14 xl:min-w-[35vw]"
          >
            <label className="text-center font-semibold text-xl -mt-2 mb-8">
              Fill the Details{' '}
            </label>
            <label htmlFor="Name">Name :</label>
            <input
              required
              onChange={handlechange}
              type="text"
              id="Name"
              name="name"
              value={Navigator.name}
              placeholder="Enter your Full Name"
              className="border rounded-md text-sm h-10 pl-2 mb-5 mt-2 "
            />
            <label htmlFor="Date">Date :</label>
            <input
              required
              onChange={handlechange}
              type="date"
              id="Date"
              name="date"
              value={Navigator.date}
              className="border  rounded-md h-10 pl-2 mb-5 opacity-70 text-sm  mt-2"
            />
            <label htmlFor="Time">Time :</label>
            <input
              required
              onChange={handlechange}
              type="Time"
              id="Time"
              name="time"
              value={Navigator.time}
              placeholder="Enter email id"
              className="border  rounded-md text-sm  mt-2  mb-5 h-10 pl-2"
            />
            <label htmlFor="select">Choose speaking language:</label>
            <select
              required
              onChange={handlechange}
              id="select"
              name="language"
              value={Navigator.language}
              className="border mb-5 pl-2 mt-2 h-10 rounded-md  text-sm"
            >
              <option value="Select">Select</option>
              <option value="Kannada">Kannada</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
            </select>

            {error && (
              <p className="text-red-500 text-sm font-normal mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="bg-black text-white text-center mt-4 rounded-md h-10 text-sm"
            >
              Book Now
            </button>
          </form>
        </div>

        <div className="min-w-96 border rounded-[60px] xl:min-w-[35vw] block box-border">
          {saveddata?.data ? (
            <div className="flex flex-col h-full justify-center gap-3 flex-wrap w-full">
              <h1 className="pl-8 text-xl text-black font-bold">
                Your Information
              </h1>
              <h1 className="pl-8 mt-5">Name : {saveddata?.data?.name}</h1>
              <p className="pl-8">date : {saveddata?.data?.date}</p>
              <p className="pl-8">Time : {saveddata?.data.time}</p>
              <p className="pl-8">language : {saveddata?.data.language}</p>
              <p className="text-green-500 pl-5 text-center w-[95%] text-lg font-semibold mt-3">
                {saveddata?.message}
              </p>
              <h1 className="text-xl text-black bg-[#00000005] rounded-lg py-2 w-56 mx-auto mt-8 text-center font-bold">
                Sesssion Booked
              </h1>
            </div>
          ) : (
            <>
              <div className="flex justify-center items-center mt-48 text-center">
                <IoHourglassOutline
                  size={100}
                  className="opacity-60 text-green-400"
                />
              </div>
              <p className="text-md font-light opacity-65 mt-2 text-center">
                You are not Booked your Session yet !
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
