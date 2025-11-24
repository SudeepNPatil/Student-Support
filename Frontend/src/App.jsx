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
import { useRef } from 'react';

function App() {
  const { setisLogin, setdata } = useContext(LoginContext);
  const { addToCart } = useContext(CartContext);
  const { addToOrder } = useContext(OrderContext);
  const [isLoading, setIsLoading] = useState(true);
  const [chatKey, setChatKey] = useState(Date.now());
  const chatref = useRef(null);
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

  useEffect(() => {
    if (chatref.current) {
      chatref.current.scrollTop = chatref.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    let input1 = input;
    setInput('');
    const newMessage = { sender: 'user', text: input1 };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const res = await fetch(
        'https://student-support-s0xt.onrender.com/chatbot',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input1 }),
        }
      );

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching bot reply:', error);
    }
  };

  const openChat = () => {
    setIsLoading(true);
    setmodal(true);
  };

  const handleIframeLoad = () => {
    // Step 1: Wait for Botpress to write its initial data
    setTimeout(() => {
      Object.keys(localStorage).forEach((key) => {
        if (
          key.startsWith('bp-webchat--') ||
          key.startsWith('conversations--') ||
          key.startsWith('botpress-message-history')
        ) {
          localStorage.removeItem(key);
        }
      });

      // Step 2: Force reload of iframe with fresh key
      setChatKey(Date.now());
      setIsLoading(false);
    }, 800); // small delay to ensure Botpress initializes first
  };

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <div
        onClick={openChat}
        className="fixed bottom-4 right-2 w-24 hover:scale-125 duration-500 ease-in-out cursor-pointer"
      >
        <img src={AI} alt="chatbot" className="object-cover w-fit h-full" />
      </div>

      <ModalChatbot isOpen={modal} onClose={() => setmodal(false)}>
        <div className="h-[500px] w-[80vw] sm:w-[550px] relative flex flex-col ">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <div className="w-3/4 h-4 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse mb-3" />
              <div className="w-2/4 h-4 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse mb-3" />
              <div className="w-1/4 h-4 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
              <p className="text-gray-500 mt-4 text-lg sm:text-2xl animate-pulse">
                Loading chatbot...
              </p>
            </div>
          )}

          <iframe
            key={openChat}
            src={`https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/08/08/20251008082237-U1HL1ZDG.json`}
            className="w-full h-full border-none rounded-xl"
            title="CodeMentor Chatbot"
            onLoad={handleIframeLoad}
            allow="microphone; autoplay; clipboard-write;"
          />

          {/* <div
            ref={chatref}
            className="flex-1  overflow-y-auto p-4 space-y-2 mb-24 scroll-m-1 scroll-smooth no-scrollbar"
          >
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
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey)
                e.preventDefault(), sendMessage();
            }}
            className="border rounded-xl w-full outline-none absolute bottom-4 min-h-5 sm:min-h-12 pl-5 pt-5 pr-11 scroll-smooth no-scrollbar"
            placeholder="ask anything...."
          />
          <HiArrowCircleUp
            onClick={sendMessage}
            className="text-4xl absolute bottom-6 right-2 cursor-pointer hover:scale-110 duration-500 ease-in-out"
          />
           */}
        </div>
      </ModalChatbot>
    </>
  );
}

export default App;
