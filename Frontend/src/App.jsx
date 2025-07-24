import Navbar from "./Components/Navbar.jsx"
import './index.css'
import Footer from "./Components/Footer.jsx"
import { Outlet } from "react-router-dom"
import { useEffect } from "react";


function App() {

  useEffect(() => {
    fetch("https://student-support-s0xt.onrender.com/me", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {

        console.log(data);

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
