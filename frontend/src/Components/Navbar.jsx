import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar( {title} ) {

    const [menuOpen, setMenuOpen] = useState(false);


    const navbarItems = [
        { name: "Home", path: "/" },
        { name: "Barbers", path: "/barbers" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
    ];


    return (

 <div className="container">

    <div className="d-flex flex-wrap justify-content-between align-items-center">

        <Link
            to="/"
            className="navbar-brand mb-0 fs-3 fw-bold"
        >
            {title}
        </Link>

        <button
            className="navbar-toggler d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
        >
            ☰
        </button>

        <ul
            className={`navbar-nav ${
                menuOpen ? "d-block" : "d-none"
            } d-lg-flex flex-lg-row gap-lg-3`}
        >
            {navbarItems.map((item) => (
                <li
                    className="nav-item"
                    key={item.path}
                >
                    <Link
                        className="nav-link"
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>

    </div>

</div>

    );
}