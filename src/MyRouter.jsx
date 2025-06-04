import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Project from "./Components/Project.jsx";
import Contact from "./Components/Contact.jsx";


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


            </Routes>

        </BrowserRouter>
    )
}

