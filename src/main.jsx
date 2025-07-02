
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Project from './Components/Project.jsx'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import Custom_Build_Service from './Components/Custom_Build_Service.jsx'
import Project_Navigator from './Components/Project_Navigator.jsx'
import Debug_Rescue from './Components/Debug_Rescue.jsx'
import ErrorElement from './Components/ErrorElement.jsx'
import Login from './Components/Login.jsx'


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
                element: <Project />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/Login",
                element: <Login />
            },
            {
                path: "/Custom_Build_Service",
                element: <Custom_Build_Service />
            },
            {
                path: "/Project_Navigator",
                element: <Project_Navigator />
            },
            {
                path: "/Debug_Rescue",
                element: <Debug_Rescue />
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
