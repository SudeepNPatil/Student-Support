import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Project from "./Components/Project.jsx";
import Contact from "./Components/Contact.jsx";
import Custom_Build_Service from "./Components/Custom_Build_Service.jsx";
import Project_Navigator from "./Components/Project_Navigator.jsx";
import Debug_Rescue from "./Components/Debug_Rescue.jsx";


export default function MyRouter() {
    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<App />} />

                <Route path="/Home" element={<App />} />

                <Route path="/Project" element={<Project />} />

                <Route path="/Contact" element={<Contact />} />

                <Route path="/Admin" element={<App />} />

                <Route path="/login" element={<App />} />

                <Route path="/Custom_Build_Service" element={<Custom_Build_Service />} />

                <Route path="/Project_Navigator" element={<Project_Navigator />} />

                <Route path="/Debug_Rescue" element={<Debug_Rescue />} />


            </Routes>

        </BrowserRouter>
    )
}

