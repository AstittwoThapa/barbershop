export default function Barber() {
    const barbers = [
        {
            id: 1,
            name: "Esnya",
            specialization: "Manicure",
            experience: "10 years",
            available: true
        },
        {
            id: 2,
            name: "Astitwo Thapa",
            specialization: "Haircut",
            experience: "3 years",
            available: true
        },
        {
            id: 3,
            name: "Aashraya Bista",
            specialization: "Pedicure",
            experience: "2 years",
            available: false
        },
        {
            id: 4,
            name: "Pramish Bhattarai",
            specialization: "Manicure",
            experience: "1 year",
            available: true
        },
        {
            id: 5,
            name: "Cleo Sol",
            specialization: "Haircut",
            experience: "7 years",
            available: false
        },
        {
            id: 6,
            name: "Jayson Tatum",
            specialization: "Haircut",
            experience: "10 years",
            available: true
        }
    ];

    return (
        <main className="py-5">

            <div className="container">

                <div className="text-center mb-5">

                    <h1 className="display-5 fw-bold">
                        Our Barbers
                    </h1>

                    <p className="lead text-muted mt-3">
                        Meet our professional barbers and find the right one
                        for your next appointment.
                    </p>

                </div>


                <div className="row g-4">

                    {barbers.map((barber) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={barber.id}
                        >

                            <div className="card h-100 border-0 shadow-sm">

                                <div className="card-body p-4 text-center d-flex flex-column">

                                    <div
                                        className="
                                            rounded-circle
                                            bg-dark
                                            text-white
                                            d-flex
                                            align-items-center
                                            justify-content-center
                                            mx-auto
                                            mb-3
                                        "
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            fontSize: "32px"
                                        }}
                                    >
                                        {barber.name.charAt(0)}
                                    </div>


                               
                                    <h2 className="h4 fw-bold">
                                        {barber.name}
                                    </h2>


                               
                                    <p className="text-muted mb-2">
                                        {barber.specialization}
                                    </p>


                                   
                                    <p className="small text-muted mb-3">
                                        {barber.experience} experience
                                    </p>


                                    <div className="mb-4">

                                        {barber.available ? (
                                            <span className="badge bg-success">
                                                Available
                                            </span>
                                        ) : (
                                            <span className="badge bg-secondary">
                                                Unavailable
                                            </span>
                                        )}

                                    </div>


                                    <button
                                        className="btn btn-outline-dark w-100 mt-auto"
                                        disabled={!barber.available}
                                    >
                                        View Profile
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </main>
    );
}

