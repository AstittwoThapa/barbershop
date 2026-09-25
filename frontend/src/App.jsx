import NavBar from "./Components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Barbers from "./Pages/Barber.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";

export default function App() {
    return (
        <>
            <NavBar title = "Barbershop"/> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/barbers" element={<Barbers/>}/>
            </Routes>
                 
        </>
    );
};