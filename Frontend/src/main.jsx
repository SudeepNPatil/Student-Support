import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Project from './Components/Project.jsx';
import Home from './Components/Home.jsx';
import ErrorElement from './Components/ErrorElement.jsx';
import Cart from './Components/Cart.jsx';
import Wishlist from './Components/Wishlist.jsx';
import OrderTrack from './Components/OrderTrack.jsx';
import Product from './Components/Product.jsx';
import { LoginContextProvider } from './Context/LoginContext.jsx';
import { lazy, Suspense } from 'react';
import Loding from './Components/Loding.jsx';
import Admin from './Components/Admin/Admin.jsx';
import User from './Components/Admin/Users.jsx';
import Orders from './Components/Admin/Orders.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import { CartContextProvider } from './Context/CartContext.jsx';
import { WishlistContextProvider } from './Context/WishlistContext.jsx';
import { ProductContextProvider } from './Context/ProductContext.jsx';
import Search from './Components/Search.jsx';
import { Fragment } from 'react';
import AllProduct from './Components/AllProduct.jsx';
import { OrderContextProvider } from './Context/OrderContext.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Ideas from './Components/Admin/Ideas.jsx';
import Debugs from './Components/Admin/Debugs.jsx';
import Session from './Components/Admin/Session.jsx';
import Dashboard from './Components/Admin/Dashboard.jsx';

const Contact = lazy(() => import('./Components/Contact.jsx'));
const Custom_Build_Service = lazy(() =>
  import('./Components/Custom_Build_Service.jsx')
);
const Project_Navigator = lazy(() =>
  import('./Components/Project_Navigator.jsx')
);
const Debug_Rescue = lazy(() => import('./Components/Debug_Rescue.jsx'));
const Login = lazy(() => import('./Components/Login.jsx'));
const Signup = lazy(() => import('./Components/Signup.jsx'));
const AdminLogin = lazy(() => import('./Components/Admin/AdminLogin.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Home',
        element: <Home />,
      },
      {
        path: '/Project',
        element: <Project />,
        children: [
          {
            path: '',
            element: <AllProduct />,
          },
          {
            path: ':category',
            element: <Product />,
          },
          {
            path: ':category/:projectId',
            element: <ProductDetails />,
          },
          {
            path: 'Cart',
            element: <Cart />,
          },
          {
            path: 'Portfolio',
            element: <Portfolio />,
          },
          {
            path: 'Wishlist',
            element: <Wishlist />,
          },
          {
            path: 'Order',
            element: <OrderTrack />,
          },
          {
            path: 'Search',
            element: <Search />,
          },
        ],
      },
      {
        path: '/Contact',
        element: (
          <Suspense fallback={<Loding />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/Custom_Build_Service',
        element: (
          <Suspense fallback={<Loding />}>
            <Custom_Build_Service />
          </Suspense>
        ),
      },
      {
        path: '/Project_Navigator',
        element: (
          <Suspense fallback={<Loding />}>
            <Project_Navigator />
          </Suspense>
        ),
      },
      {
        path: '/Debug_Rescue',
        element: (
          <Suspense fallback={<Loding />}>
            <Debug_Rescue />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/Login',
    element: (
      <Suspense fallback={<Loding />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/Signup',
    element: (
      <Suspense fallback={<Loding />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: '/Admin',
    element: (
      <Suspense fallback={<Loding />}>
        <AdminLogin />
      </Suspense>
    ),
  },
  {
    path: 'AdminDashboard',
    element: <Admin />,
    children: [
      {
        path: 'Users',
        element: <User />,
      },
      {
        path: 'Orders',
        element: <Orders />,
      },
      {
        path: 'Ideas',
        element: <Ideas />,
      },
      {
        path: 'Debugs',
        element: <Debugs />,
      },
      {
        path: 'Dashboard',
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'Session',
        element: <Session />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <OrderContextProvider>
    <ProductContextProvider>
      <WishlistContextProvider>
        <CartContextProvider>
          <LoginContextProvider>
            <RouterProvider router={router} />
          </LoginContextProvider>
        </CartContextProvider>
      </WishlistContextProvider>
    </ProductContextProvider>
  </OrderContextProvider>
);
