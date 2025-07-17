import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Project from './Components/Project.jsx'
import Home from './Components/Home.jsx'
import ErrorElement from './Components/ErrorElement.jsx'
import Cart from './Components/Cart.jsx'
import Wishlist from './Components/Wishlist.jsx'
import OrderTrack from './Components/OrderTrack.jsx'
import Product from './Components/Product.jsx'
import { LoginContextProvider } from "./Context/LoginContext.jsx"
import { lazy, Suspense } from 'react'
import Loding from './Components/Loding.jsx'
import Admin from './Components/Admin/Admin.jsx'
import User from './Components/Admin/Users.jsx'
import Orders from './Components/Admin/Orders.jsx'
import ProductDetails from './Components/ProductDetails.jsx'
import { CartContextProvider } from './Context/CartContext.jsx'

const Contact = lazy(() => import('./Components/Contact.jsx'));
const Custom_Build_Service = lazy(() => import('./Components/Custom_Build_Service.jsx'));
const Project_Navigator = lazy(() => import('./Components/Project_Navigator.jsx'));
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
                element: <Home />
            },
            {
                path: "/Home",
                element: <Home />
            },
            {
                path: '/Project',
                element: <Project />,
                children: [
                    /* {
                        index: true,
                        element: <Product />
                    }, */
                    {
                        path: ':category',
                        element: <Product />
                    },
                    {
                        path: ':category/:projectId',
                        element: <ProductDetails />
                    },
                    {
                        path: 'Cart',
                        element: <Cart />
                    },
                    {
                        path: 'Wishlist',
                        element: <Wishlist />
                    },
                    {
                        path: 'Order',
                        element: <OrderTrack />
                    },
                ]
            },
            {
                path: "/Contact",
                element: (
                    <Suspense fallback={<Loding />}>
                        <Contact />
                    </Suspense>
                )
            },
            {
                path: "/Custom_Build_Service",
                element: (
                    <Suspense fallback={<Loding />}>
                        <Custom_Build_Service />
                    </Suspense>
                )
            },
            {
                path: "/Project_Navigator",
                element: (
                    <Suspense fallback={<Loding />}>
                        <Project_Navigator />
                    </Suspense>
                )
            },
            {
                path: "/Debug_Rescue",
                element: (
                    <Suspense fallback={<Loding />}>
                        <Debug_Rescue />
                    </Suspense>
                )
            },
        ]
    },
    {
        path: "/Login",
        element: (
            <Suspense fallback={<Loding />}>
                <Login />
            </Suspense>
        )
    },
    {
        path: "/Signup",
        element: (
            <Suspense fallback={<Loding />}>
                <Signup />
            </Suspense>
        )
    },
    {
        path: "/Admin",
        element: (
            <Suspense fallback={<Loding />}>
                <AdminLogin />
            </Suspense>
        ),
    },
    {
        path: "AdminDashboard",
        element: <Admin />,
        children: [
            {
                path: "Users",
                element: <User />
            },
            {
                path: "Orders",
                element: <Orders />
            }
        ]
    },
])

createRoot(document.getElementById('root'))
    .render(
        <CartContextProvider>
            <LoginContextProvider>
                <RouterProvider router={router} />
            </LoginContextProvider>
        </CartContextProvider>

    )
