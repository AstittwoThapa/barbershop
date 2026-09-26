import Hero from "../Components/Hero.jsx";
import ServiceSection from "../Components/ServiceSection.jsx";
import { Link } from "react-router-dom";

export default function Home() {
    return (
 <main>

            <section className="bg-dark text-white py-5">

                <div className="container py-5">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <p className="text-uppercase fw-bold mb-2">
                                Welcome to Maison du Soin
                            </p>

                            <h1 className="display-3 fw-bold">
                                Your Style.
                                <br />
                                Your Choice.
                            </h1>

                            <p className="lead mt-4">
                                Find professional barbers and grooming
                                services near you. Discover your next
                                favorite professional and book your appointment.
                            </p>


                            <div className="mt-4">

                                <div className="input-group input-group-lg">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search for a barber or service..."
                                    />

                                    <button className="btn btn-light">
                                        Search
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


<div className="row g-4">

    <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
            <div className="card-body p-4 d-flex flex-column">

                <h3 className="h4">
                    Haircut
                </h3>

                <p className="text-muted">
                    Get a fresh cut from a professional
                    barber who understands your style.
                </p>

                <Link
                    to="/services"
                    className="btn btn-outline-dark mt-auto w-100"
                >
                    View Service
                </Link>

            </div>
        </div>
    </div>


    <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
            <div className="card-body p-4 d-flex flex-column">

                <h3 className="h4">
                    Manicure
                </h3>

                <p className="text-muted">
                    Professional nail care designed
                    to keep your hands looking great.
                </p>

                <Link
                    to="/services"
                    className="btn btn-outline-dark mt-auto w-100"
                >
                    View Service
                </Link>

            </div>
        </div>
    </div>


    <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0">
            <div className="card-body p-4 d-flex flex-column">

                <h3 className="h4">
                    Pedicure
                </h3>

                <p className="text-muted">
                    Relax with professional foot and
                    nail care from our specialists.
                </p>

                <Link
                    to="/services"
                    className="btn btn-outline-dark mt-auto w-100"
                >
                    View Service
                </Link>

            </div>
        </div>
    </div>

</div>


            <section className="py-5 bg-light">

                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="fw-bold">
                            Why Maison du Soin?
                        </h2>

                    </div>


                    <div className="row g-4 text-center">

                        <div className="col-md-4">

                            <h3 className="h5 fw-bold">
                                Find Professionals
                            </h3>

                            <p className="text-muted">
                                Browse skilled barbers and discover
                                professionals that match your needs.
                            </p>

                        </div>


                        <div className="col-md-4">

                            <h3 className="h5 fw-bold">
                                Easy Booking
                            </h3>

                            <p className="text-muted">
                                Find a suitable service and book your
                                appointment without the hassle.
                            </p>

                        </div>


                        <div className="col-md-4">

                            <h3 className="h5 fw-bold">
                                Convenient
                            </h3>

                            <p className="text-muted">
                                Keep your grooming experience simple,
                                organized, and convenient.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
</main>
    );
};