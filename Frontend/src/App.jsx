import Navbar from "./Components/Navbar.jsx"
import './index.css'
import Footer from "./Components/Footer.jsx"
import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "./Context/LoginContext.jsx";
import { CartContext } from "./Context/CartContext.jsx";
import { OrderContext } from "./Context/OrderContext.jsx";


function App() {

  const { setisLogin, setdata } = useContext(LoginContext);
  const { addToCart } = useContext(CartContext);
  const { addToOrder } = useContext(OrderContext);

  useEffect(() => {
    fetch("https://student-support-s0xt.onrender.com/User/me", {
      credentials: "include"
    })
      .then(async (res) => {

        if (res.status === 401) {
          setisLogin(false);
          setdata(null);
          return;

        }

        const data = await res.json();
        setisLogin(true);
        setdata(data);
        data.cartdetails.forEach(element => {
          addToCart(element);
        });
        data.orderdetails.forEach((order) => {
          addToOrder(order)
        })

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
