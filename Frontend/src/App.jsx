import Navbar from "./Components/Navbar.jsx"
import './index.css'
import Footer from "./Components/Footer.jsx"
import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "./Context/LoginContext.jsx";


function App() {

  const { isLogin, setisLogin, data, setdata } = useContext(LoginContext);

  useEffect(() => {
    fetch("https://student-support-s0xt.onrender.com/me", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {

        console.log(data);
        setisLogin(true);
        setdata(data?.user?.email[0])

      })
      .catch(() => {
        console.log("error");
      });
  }, []);


  return (
    <>

      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
