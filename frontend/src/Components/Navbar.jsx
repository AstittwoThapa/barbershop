import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar( {title} ) {

    const [menuOpen, setMenuOpen] = useState(false);


    const navbarItems = [
        { name: "Home", path: "/" },
        { name: "Barbers", path: "/barbers" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
    ];


    return (
        
        <nav className="navbar navbar-dark bg-dark py-3">
            <div className="container">
                <div className=" d-flex justify-content-between align-items-center">
                <h1 className="navbar-brand mb-0"> {title} </h1>

                <button
                    className = "navbar-toggler d-lg-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                    </button>
                </div>
    {menuOpen && (
        <ul className={`navbar-nav ${menuOpen ? "d-block" : "d-none"}d-lg-flex flex-lg-row gap-lg-3 mt-3 mt-lg-0`}> 
            {navbarItems.map((item) => {
                return (
                    <li className="nav-item" key={item.path}>
                    <Link className="nav-link" to={item.path}>
                        {item.name}
                    </Link>
                    </li>
                );
            })}
        </ul>
    )}
            </div>
        </nav>
        
    );
}