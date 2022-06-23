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

function Booking() {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    localStorage.removeItem("url");

    useEffect(()=>{
        //Cargo datos del producto
        const getProduct = async()=>{
            await fetch("http://10.0.0.189/products/findById/" + id,{
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