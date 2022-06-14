import Button from "../Button";
import Calendar from "./Calendar";

function HotelDate() {
    return (
        <section className="section__hotel-date">
            <h2>Fechas disponibles</h2>
            <div className="div__calendar-info">
                <Calendar />
                <div className="div__button-selected">
                    <p className="p__bold-style">Agregá tus fechas de viaje para obtener precios exactos</p> 
                    <Button text="Iniciar reserva" className="btn button__solid-type" />
                </div>
            </div>
        </section>
    )
}

export default HotelDate;