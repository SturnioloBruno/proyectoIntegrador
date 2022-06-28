import { React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import HeaderProduct from "../Products/HeaderProduct";
import Form from "./Form";
import Calendar from "../Products/Calendar";
import Hour from "./Hour";
import Details from "./Details";
import Politics from "../Products/Politics";
import "../../styles/Booking/Booking.css";
import "../../styles/Booking/Date.css";
import Api from "../Helpers/Api";

function Booking() {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    localStorage.removeItem("url");

    useEffect(()=>{
        //Cargo datos del producto
        const getProduct = async()=>{
<<<<<<< Updated upstream
            await fetch("http://ec2-54-146-47-89.compute-1.amazonaws.com:8080/products/findById/" + id,{
=======
            await fetch(Api + "products/findById/" + id,{
>>>>>>> Stashed changes
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(respuesta){
                return respuesta.json();
            })
            .then(function (product) {
                setProduct(product);
            })
        }      
        getProduct();
    }, [id]);

<<<<<<< Updated upstream
=======
    const handlerSubmit = (e) => {
        e.preventDefault();
        
        if(city.value.trim() === ""){
            city.focus();
            city.className = "error";
            return
        }

        if(hour.value === ""){
            hour.focus();
            hour.className = "error";
            return
        }

        //Insert con datos de la reserva
        const insertBooking = async()=>{
            await fetch(Api + "bookings/insert", {
                method:'POST',
                headers: {
                    "Access-Control-Allow-Headers" : "Content-Type",
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }, body: JSON.stringify({
                    bookingStarTime: hour.value,
                    bookingStartDate: `${startYear}-${startMonth}-${startDay}`,
                    bookingFinishDate: `${endYear}-${endMonth}-${endDay}`,
                    bookingCity: city.value,
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
            .then((response) => {
                if(response.status === 200) navigate("/ok");
                if(response.status === 400) alert("Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde.");
                return response.json();
            })
        }
        insertBooking();
    }

>>>>>>> Stashed changes
    return (
        <section className='section__booking-hotel'>
            <HeaderProduct name={product?.name} category={product?.category.title} />
            <form className='div__booking-hotel'>
                <div>
                    <Form />
                    <section className='section__booking-date'>
                        <h2>Seleccioná tu fecha de reserva</h2>
                        <Calendar bookings={product?.bookings}/>
                    </section>
                    <Hour />
                </div>
                <Details src={product?.images[0]?.nombre_url} name={product?.name} category={product?.category.title} address={product?.address} city={product? product.city?.cityName + ", " + product.city?.country : ""} stars={product?.stars} />
            </form>
            <Politics policy={product?.policy} />
        </section>
    )
}

export default Booking;