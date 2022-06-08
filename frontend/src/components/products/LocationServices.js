import "../../styles/products/LocationServices.css";

function LocationServices({services}) {
    return (
        <section className='section__location-services section__title-border'>
            <h2>¿Qué ofrece este lugar?</h2>
            <ul>
                {services?.map((service) => (
                    <li key={service.characteristic.id} className={`li__${(service.characteristic.title.toLowerCase().replace(/\s+/g, '-'))}`}>
                        <p>{service.characteristic.title}</p>    
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default LocationServices;