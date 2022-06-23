import { Link } from "react-router-dom";
import Calendar from "./Calendar";

function HotelDate({id,bookings}) {
    if(!localStorage.getItem("user")) {
        sessionStorage.setItem("url", `/product/${id}/booking`);
        sessionStorage.setItem("msg", "Debe iniciar sesión para realizar reservas.");
    }

    const handlerClick = (e)=>{
        if(sessionStorage.getItem("dateStart") === null || sessionStorage.getItem("dateEnd") === null) {
            alert("Seleccione un rango de fechas para continuar.");
        }

        if(!sessionStorage.getItem("dateStart")&&!sessionStorage.getItem("dateEnd")){
            e.preventDefault();
            return //VER DE MOSTRAR ALGO
        }
    }

    return (
        <section className="section__hotel-date">
            <h2>Fechas disponibles</h2>
            <div className="div__calendar-info">
                <Calendar bookings={bookings}/>
                <div className="div__button-selected">
                    <p className="p__bold-style">Agregá tus fechas de viaje para obtener precios exactos</p>
                    {localStorage.user === undefined ?
                    <Link onClick={handlerClick} to={`/login`} className="btn button__solid-type">Iniciar reserva</Link> :
                    <Link onClick={handlerClick} to={`/product/${id}/booking`} className="btn button__solid-type">Iniciar reserva</Link> }
                </div>
            </div>
        </section>
    )
}

export default HotelDate;