import { React, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Calendar from "./Calendar";

function HotelDate({id,bookings}) {
    const [pRange, setpRange] = useState(null);
    const navigate = useNavigate();

    const handlerClick = (e,login) => {
        e.preventDefault()

        if(sessionStorage.getItem("dateStart") === null || sessionStorage.getItem("dateEnd") === null) {    
            setpRange("Seleccione un rango de fechas para continuar.");
            return
        }

        if(!login){
         if(!localStorage.getItem("user")) {
                            sessionStorage.setItem("url", `/product/${id}/booking`);
                            sessionStorage.setItem("msg", "Debe iniciar sesión para realizar reservas.");
         } 
         navigate("/login")
         return
        }

        navigate(`/product/${id}/booking`)
    }

    return (
        <section className="section__hotel-date">
            <h2>Fechas disponibles</h2>
            <div className="div__calendar-info">
                <Calendar bookings={bookings} error={setpRange}/>
                <div className="div__button-selected">
                    <p className="p__bold-style">Agregá tus fechas de viaje para obtener precios exactos</p>
                    {pRange != null ? <p className='p__error'>{pRange}</p> : ""}
                    {localStorage.user === undefined ?
                    <Link onClick={(e)=>handlerClick(e,false)} to={`/login`} className="btn button__solid-type">Iniciar reserva</Link>:
                    <Link onClick={(e)=>handlerClick(e,true)} to={`/product/${id}/booking`} className="btn button__solid-type">Iniciar reserva</Link> }
                </div>
            </div>
        </section>
    )
}

export default HotelDate;