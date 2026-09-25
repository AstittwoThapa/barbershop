export default function ServiceCard ( {service} ) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{service.name}</h4>
                
                <p className="card-text">{service.description}</p>

                <p className="card-text">Rs. {service.price}</p>

                <p className="card.text">{service.duration}</p>
                
                <button className="btn btn-primary"> Book Now </button>
            </div>
        </div>
    );
};