export default function About () {
    return (
<main>

            {/* Introduction */}
            <section className="py-5 bg-light">
                <div className="container py-4">

                    <div className="row justify-content-center text-center">

                        <div className="col-lg-8">

                            <h1 className="display-5 fw-bold">
                                About BarberHub
                            </h1>

                            <p className="lead mt-3">
                                BarberHub makes it easier to discover
                                professional barbers and book grooming
                                services in one place.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* What We Offer */}
            <section className="py-5">
                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <h2 className="fw-bold">
                                Grooming Made Simple
                            </h2>

                            <p className="text-muted mt-3">
                                Finding the right barber should not be
                                complicated. BarberHub brings barbers,
                                services, and appointments together in
                                one convenient platform.
                            </p>

                            <p className="text-muted">
                                Whether you need a haircut, manicure,
                                or pedicure, you can explore available
                                services and find professionals that
                                match your needs.
                            </p>

                        </div>


                        <div className="col-lg-6">

                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">

                                    <h3 className="h4 mb-4">
                                        What BarberHub Offers
                                    </h3>

                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item px-0">
                                            Find professional barbers
                                        </li>

                                        <li className="list-group-item px-0">
                                            Explore grooming services
                                        </li>

                                        <li className="list-group-item px-0">
                                            Check barber availability
                                        </li>

                                        <li className="list-group-item px-0">
                                            Book appointments easily
                                        </li>

                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* Call To Action */}
            <section className="bg-dark text-white py-5">
                <div className="container text-center py-4">

                    <h2 className="fw-bold">
                        Ready for your next appointment?
                    </h2>

                    <p className="mt-3">
                        Find a barber and discover the right service
                        for you.
                    </p>

                    <button className="btn btn-light btn-lg mt-2">
                        Explore Barbers
                    </button>

                </div>
            </section>

        </main>
    );
};