import { Link } from "react-router-dom";
import "../../styles/Booking/SuccessfulBooking.css";

function SuccessfulBooking() {
    return (
        <section className="section__successful-booking">
            <div>
                <h2>¡Muchas gracias!</h2>
                <p>Su reserva se ha realizado con éxito</p>
                <Link to="/" className="btn button__solid-type">ok</Link>
            </div>
        </section>
    )
}

export default SuccessfulBooking;