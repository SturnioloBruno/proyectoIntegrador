import { React, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { SearchContext } from '../Context/SearchContext';
import "../../styles/Booking/Form.css";

function Form() {
    const {user} = useContext(UserContext);
    const {id} = useParams();

    const city = document.querySelector("#input__city-booking");
    const description = document.querySelector("#textarea__description-booking");
    const checkCovid = document.querySelector("#label__covid");
    const hour = document.querySelector("#select__option-hour");

    const startDayGet = useContext(SearchContext).startDateCache.getDate().toString();
    const startDay = startDayGet.length === 1 ? "0" + startDayGet : startDayGet;
    const startMonthGet = useContext(SearchContext).startDateCache.getMonth().toString();
    const startMonth = startMonthGet.length === 1 ? "0" + startMonthGet : startMonthGet;
    const startYear = useContext(SearchContext).startDateCache.getFullYear();

    const endDayGet = useContext(SearchContext).endDateCache.getDate().toString();
    const endDay = endDayGet.length === 1 ? "0" + endDayGet : endDayGet;
    const endMonthGet = useContext(SearchContext).endDateCache.getMonth().toString();
    const endMonth = endMonthGet.length === 1 ? "0" + endMonthGet : endMonthGet;
    const endYear = useContext(SearchContext).endDateCache.getFullYear();

    useEffect(()=>{
        //Insert con datos de la reserva
        const getProduct = async()=>{
            await fetch("http://localhost:8080/bookings/insert", {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    bookingStarTime: hour.value,
                    bookingStartDate: `${startYear}-${startMonth}-${startDay}`,
                    bookingFinishDate: `${endYear}-${endMonth}-${endDay}`,
                    bookingVaccineCovid: checkCovid.checked,
                    bookingUserInfoCovid: description.value,
                    prodId:{
                        id: parseInt(id)
                    },
                    userId:{
                        id: user.id
                    }
                })
            })
            .then(function(respuesta){
                return respuesta.json();
            })
        }      
        getProduct();
    }, []);

    return (
        <section className="section__booking-form">
            <h2>Completá tus datos</h2>
            <div className="div__background-white">
                <label>
                    <span>Nombre</span>
                    <input type="text" name="name" value={user?.userName} disabled />
                </label>
                <label>
                    <span>Apellido</span>
                    <input type="text" name="lastname" value={user?.userSurname} disabled />
                </label>
                <label>
                    <span>Correo electronico</span>
                    <input type="email" name="email" value={user?.userEmail} disabled />
                </label>
                <label>
                    <span>Ciudad</span>
                    <input type="text" name="city" id="input__city-booking" required />
                </label>
                <label className="label__description">
                    <span>Datos para el vendedor (opcional)</span>
                    <textarea name="textarea" id="textarea__description-booking"></textarea>
                </label>
                <label htmlFor="label__covid" className="label__covid">
                    <span>¿Se encuentra vacunado contra el COVID-19?</span>
                    <input type="checkbox" name="covid" id="label__covid" required />
                </label>
            </div>
        </section>
    )
}

export default Form;