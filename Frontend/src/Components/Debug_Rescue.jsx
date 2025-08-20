import { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext.jsx';
import ModalLogin from '../Modals/ModalLogin.jsx';
import { Link } from 'react-router-dom';
import ModalLoading from '../Modals/ModalLoading.jsx';

export default function Debug_Rescue() {
  const { isLogin, data: userData } = useContext(LoginContext);

  const [modal, setmodal] = useState(false);
  const [error, seterror] = useState('');
  const [modalloding, setmodalloding] = useState(false);
  const [saveddata, setsaveddata] = useState({});

  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    email: userData?.email,
    Name: '',
    Number: '',
    textarea: '',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Name || !formData.Number || !formData.textarea || !fileName) {
      seterror('⚠️ Please fill all the details.');
      return;
    } else {
      seterror('');
    }

    if (isLogin) {
      setmodalloding(true);

      const form = new FormData();
      form.append('email', userData?.email);
      form.append('name', formData.Name);
      form.append('whatsapp', formData.Number);
      form.append('describe', formData.textarea);
      form.append('screenshots', e.target.file.files[0]);

      const res = await fetch(
        'https://student-support-s0xt.onrender.com/DebugAndRescue',
        {
          method: 'POST',
          body: form,
        }
      );

      const data = await res.json();
      setsaveddata(data);
      setmodalloding(false);
      setFormData({
        email: userData?.email,
        Name: '',
        Number: '',
        textarea: '',
      });
      setFileName('');
    } else {
      setmodal(true);
    }
  };

  const handlcancel = async (email) => {
    setmodalloding(true);
    const res = await fetch(
      `https://student-support-s0xt.onrender.com/DebugAndRescue/${email}`,
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
      <div className="flex flex-col items-center bg-red-100 pb-5 pt-24 xl:hidden">
        <h1 className="text-x text-center font-bold ">
          We Here to Support you
        </h1>
        <p className="text-gray-700 mt-2 text-center w-[80vw]">
          Stuck on a bug or problem in your project? Tell us your issue, and
          we’ll help you fix it fast!
        </p>
      </div>

      <div className="flex flex-col items-center mt-5 flex-wrap  xl:hidden">
        <form onSubmit={handleSubmit} className="flex flex-col flex-wrap">
          <label htmlFor="Name">Name :</label>
          <input
            required
            onChange={handleInputChange}
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            placeholder="Enter your Full Name"
            className="border rounded-md text-sm h-8 pl-2 mb-4 mt-2 w-[80vw] bg-gray-200"
          />
          <label htmlFor="WhatsApp">WhatsApp Number :</label>
          <input
            required
            onChange={handleInputChange}
            type="number"
            id="WhatsApp"
            name="Number"
            value={formData.Number}
            placeholder="Contact to reach you"
            className="border  rounded-md h-8 pl-2 mb-4 mt-2 text-sm w-[80vw] bg-gray-200"
          />
          <label htmlFor="Describe">Describe Your Issue</label>
          <textarea
            required
            onChange={handleInputChange}
            name="textarea"
            id="Describe"
            value={formData.textarea}
            placeholder="Paste your error, code, or explain what’s not working..."
            className="w-[80vw] border mb-4 pl-2 mt-2 h-20 rounded-md text-sm bg-gray-200"
          ></textarea>
          <label htmlFor="file">Upload Screenshot</label>
          <input
            required
            onChange={handleFileChange}
            type="file"
            id="file"
            className="block file:w-[80vw] mb-6 mt-2 text-sm text-gray-500
               file:mr-4 file:py-2 file:px-4
               file:rounded-md file:border-0
               file:text-sm file:font-semibold
               file:bg-blue-50 file:text-blue-700
               hover:file:bg-blue-100"
          />

          {fileName && <p className="mb-5">Selected File: {fileName}</p>}

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
              <p className="pl-8">Phnumber : {saveddata?.data?.whatsapp}</p>
              <p className="pl-8">describe : {saveddata?.data.describe}</p>
              <img
                src={saveddata.data.screenshots}
                alt="image"
                className="pl-8 w-40 h-auto "
              />
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
              <MdErrorOutline
                size={52}
                className="mt-14 self-center opacity-70 text-red-300"
              />
              <p className="text-sm text-center font-light opacity-65 mt-2">
                You are not submited your code error yet !
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

          <p className="text-gray-700 text-lg">Please login to post bug...</p>

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

      <div className="hidden xl:pt-28 xl: xl:flex xl:flex-col xl:bg-red-100 xl:pb-5 rounded-md ">
        <h1 className="lg:text-2xl xl:text-4xl pt-5 text-center font-bold ">
          We Here to Support you
        </h1>

        <p className="text-gray-700 mt-3 text-center w-[80vw] self-center pb-5">
          Stuck on a bug or problem in your project? Tell us your issue, and
          we’ll help you fix it fast!
        </p>
      </div>

      <div className="hidden xl:flex xl:gap-24 xl:flex-wrap justify-center xl:mt-12 mb-12">
        <div className="min-w-96 border p-2 rounded-[60px]">
          <form
            onSubmit={handleSubmit}
            className="xl:flex xl:flex-col xl:flex-wrap p-14 xl:min-w-[35vw]"
          >
            <label className="text-center font-semibold text-xl -mt-2 mb-8">
              Fill the Details{' '}
            </label>
            <label htmlFor="Name">Name :</label>
            <input
              required
              onChange={handleInputChange}
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              placeholder="Enter your Full Name"
              className="border rounded-md text-sm h-10 pl-2 mb-5 mt-2"
            />
            <label htmlFor="WhatsApp">WhatsApp Number :</label>
            <input
              required
              onChange={handleInputChange}
              type="number"
              id="WhatsApp"
              name="Number"
              value={formData.Number}
              placeholder="Contact to reach you"
              className="border  rounded-md h-10 pl-2 mb-5 mt-2 text-sm "
            />
            <label htmlFor="Describe">Describe Your Issue</label>
            <textarea
              required
              onChange={handleInputChange}
              name="textarea"
              id="Describe"
              value={formData.textarea}
              placeholder="Paste your error, code, or explain what’s not working..."
              className="border mb-5 pl-2 mt-2 h-24 text-sm rounded-md"
            ></textarea>
            <label htmlFor="file">Upload Screenshot</label>
            <input
              required
              onChange={handleFileChange}
              type="file"
              id="file"
              name="image"
              className="block xl:file:w-[26.5vw] file:text-black file:bg-blue-50 file:rounded-md file:py-2   file:border-0 mb-6 mt-2 text-sm"
            />
            {fileName && <p className="mb-5">Selected File: {fileName}</p>}
            {error && (
              <p className="text-red-500 text-sm font-normal  mb-4">{error}</p>
            )}

            <button
              type="submit"
              className="bg-black text-white text-center  rounded-md h-10 text-sm"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="min-w-96 border rounded-[60px] xl:min-w-[35vw]">
          {saveddata?.data ? (
            <div className="flex flex-col h-full justify-center gap-3 flex-wrap w-full">
              <h1 className="pl-8 text-xl text-black font-bold">
                Your Information
              </h1>
              <h1 className="pl-8 mt-5">Name : {saveddata?.data?.name}</h1>
              <p className="pl-8">Phnumber : {saveddata?.data?.whatsapp}</p>
              <p className="pl-8">describe : {saveddata?.data.describe}</p>
              <img
                src={saveddata.data.screenshots}
                alt="image"
                className="pl-8 w-40 h-auto "
              />
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
                <MdErrorOutline
                  size={100}
                  className="opacity-60 text-red-500"
                />
              </div>
              <p className="text-md font-light opacity-65 mt-2 text-center">
                You are not submited your code error yet !
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
