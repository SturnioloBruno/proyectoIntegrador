import { Link } from "react-router-dom";
import Calendar from "./Calendar";

function HotelDate({id}) {
    return (
        <section className="section__hotel-date">
            <h2>Fechas disponibles</h2>
            <div className="div__calendar-info">
                <Calendar />
                <div className="div__button-selected">
                    <p className="p__bold-style">Agregá tus fechas de viaje para obtener precios exactos</p>
                    {localStorage.length == 0 ?
                    <Link to={`/login`} className="btn button__solid-type">Iniciar reserva</Link> :
                    <Link to={`/product/${id}/booking`} className="btn button__solid-type">Iniciar reserva</Link> }
                </div>
            </div>
        </section>
    )
}

export default HotelDate;