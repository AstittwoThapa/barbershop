export default function Services() {

    const services = [
    {
        id: 1,
        name: "Haircut",
        description: "Get a fresh and stylish haircut from a professional barber.",
        price: 500,
        duration: "30 minutes"
    },
    {
        id: 2,
        name: "Manicure",
        description: "Professional nail care to keep your hands clean and well-maintained.",
        price: 800,
        duration: "45 minutes"
    },
    {
        id: 3,
        name: "Pedicure",
        description: "Relaxing foot and nail care performed by our professionals.",
        price: 1000,
        duration: "60 minutes"
    }
];

    return (
        <main className="py-5">

            <div className="container">

                <h1 className="text-center mb-2">
                    Our Services
                </h1>

                <p className="text-center text-muted mb-5">
                    Choose from a range of professional grooming services.
                </p>


                <div className="row g-4">

                    {services.map((service) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={service.id}
                        >

                            <div className="card h-100 shadow-sm">

                                <div className="card-body">

                                    <h2 className="h4">
                                        {service.name}
                                    </h2>

                                    <p className="text-muted">
                                        {service.description}
                                    </p>

                                    <hr />

                                    <div className="d-flex justify-content-between">
                                        <span>
                                            {service.duration}
                                        </span>

                                        <strong>
                                            Rs. {service.price}
                                        </strong>
                                    </div>

                                    <button className="btn btn-dark w-100 mt-4">
                                        Book Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </main>
    );
};