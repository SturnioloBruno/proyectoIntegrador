import { Link } from "react-router-dom";
import "../../styles/Booking/SuccessfulBooking.css";

function SuccessfulBooking({type}) {
    return (
        <section className="section__successful-booking">
            <div>
                {type === "booking-ok" &&
                    <>
                    <h2>¡Muchas gracias!</h2>
                    <p>Su reserva se ha realizado con éxito</p>
                    <Link to="/" className="btn button__solid-type">ok</Link>
                    </>
                }
                {type === "create-ok" &&
                    <>
                    <p>Tu propiedad se ha creado con con éxito</p>
                    <Link to="/" className="btn button__solid-type">Volver</Link>
                    </>
                }
            </div>
        </section>
    )
}

export default SuccessfulBooking;