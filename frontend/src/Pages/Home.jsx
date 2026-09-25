import Hero from "../Components/Hero.jsx";
import ServiceSection from "../Components/ServiceSection.jsx";

export default function Home() {
    return (
        <>
            <h2>Welcome to BarberHub</h2>
            <p>Find your perfect Barber</p>
            <Hero/>
            <ServiceSection />
        </>
    );
};