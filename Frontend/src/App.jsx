import Navbar from './Components/Navbar.jsx';
import './index.css';
import Footer from './Components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { LoginContext } from './Context/LoginContext.jsx';
import { CartContext } from './Context/CartContext.jsx';
import { OrderContext } from './Context/OrderContext.jsx';
import AI from './assets/AI.png';
import { useState } from 'react';
import ModalChatbot from './Modals/ModalChatbot.jsx';
import { HiArrowCircleUp } from 'react-icons/hi';

function App() {
  const { setisLogin, setdata } = useContext(LoginContext);
  const { addToCart } = useContext(CartContext);
  const { addToOrder } = useContext(OrderContext);

  const [modal, setmodal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('https://student-support-s0xt.onrender.com/User/me', {
      credentials: 'include',
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
        data.cartdetails.forEach((element) => {
          addToCart(element);
        });
        data.orderdetails.forEach((order) => {
          addToOrder(order);
        });
      })
      .catch(() => {
        console.log('error');
      });
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const res = await fetch(
        'https://student-support-s0xt.onrender.com/chatbot',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();

      const botMessage = { sender: 'bot', text: data.message };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching bot reply:', error);
    }

    setInput('');
  };

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <div
        onClick={() => setmodal(true)}
        className="fixed bottom-4 right-2 w-24 hover:scale-125 duration-500 ease-in-out cursor-pointer"
      >
        <img src={AI} alt="chatbot" className="object-cover w-fit h-full" />
      </div>

      <ModalChatbot isOpen={modal} onClose={() => setmodal(false)}>
        <div className="h-[500px] w-[550px] relative flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages?.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded-xl w-full outline-none absolute bottom-4 min-h-12 pl-5 pt-2 pr-11"
            placeholder="ask anything...."
          />
          <HiArrowCircleUp
            onClick={sendMessage}
            className="text-4xl absolute bottom-6 right-2 cursor-pointer hover:scale-110 duration-500 ease-in-out"
          />
        </div>
      </ModalChatbot>
    </>
  );
}

export default App;
