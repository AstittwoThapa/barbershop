import ServiceCard from "./ServiceCard.jsx";

export default function ServiceSection() {
    const services = [
        {   name: "Haircut",
            description : "Professional haircut from our experienced barbers.",
            price: "500",
            duration: "30 minutes"
        },
        {   name: "Manicure",
            description : "Professional nail care and grooming service",
            price: "700",
            duration: "45 minutes"
         },
        {   name: "Pedicure",
            description : "Relaxing foot and nail care service.",
            price: "800",
            duration: "60 minutes"
         },
    ];
    
    return (
        <>
            <h2> Our services </h2>

        <div className="row">
            {services.map((service) => {
                return (
                    <div className="col-12 col-md-4" key={service.name}>
                        <ServiceCard 
                        service={service}/>
                    </div>
                );
            })}

        </div>
            
        </>
    );
}