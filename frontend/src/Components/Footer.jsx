import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5">

            <div className="container py-5">

                <div className="row g-4">

                    <div className="col-lg-5">

                        <h2 className="h4 fw-bold">
                            Maison du Soin
                        </h2>

                        <p className="text-secondary mt-3">
                            Find professional barbers, explore grooming
                            services, and book your next appointment
                            with ease.
                        </p>

                    </div>

                    <div className="col-6 col-lg-3">

                        <h3 className="h6 fw-bold">
                            Quick Links
                        </h3>

                        <ul className="list-unstyled mt-3">

                            <li className="mb-2">
                                <Link
                                    to="/"
                                    className="text-secondary text-decoration-none"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/barbers"
                                    className="text-secondary text-decoration-none"
                                >
                                    Barbers
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/services"
                                    className="text-secondary text-decoration-none"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="text-secondary text-decoration-none"
                                >
                                    About
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div className="col-6 col-lg-4">

                        <h3 className="h6 fw-bold">
                            Contact
                        </h3>

                        <p className="text-secondary mt-3 mb-2">
                            Email: astitwo14@gmail.com
                        </p>

                        <p className="text-secondary mb-0">
                            Phone: +977 986134****
                        </p>

                    </div>

                </div>

            </div>

            <div className="border-top border-secondary">

                <div className="container py-3">

                    <p className="text-secondary text-center mb-0 small">
                        © 2026 Maison du Soin. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

