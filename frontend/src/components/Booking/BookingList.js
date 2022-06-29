import { useEffect, useState } from 'react';
import HeaderProduct from "../Products/HeaderProduct";
import Card from '../Cards/Card';
import "../../styles/Booking/BookingList.css";

function BookingList() {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const [bookings, setBookings] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(()=>{
        //Cargo reservas del usuario
        const getBookings = async()=>{
            await fetch("http://localhost:8080/bookings/findByUserId/" + userId,{
                method:'GET',
                headers: {
                    "Access-Control-Allow-Headers" : "Content-Type",
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(function(response){
                return response.json();
            })
            .then(function (bookings) {
                setBookings(bookings)
            })
        }
        getBookings();
    },[]);

    return (
        <>
        <HeaderProduct name="Mis reservas" />
        <section className="section__booking-list">
            <ul className="ul__accommodation-list">
                {bookings?.map((booking) => (
                    <li key={booking.id+"-prod"}>
                        <Card id={booking.id} title={booking.prodId.name} src={booking.prodId.images[0]?.nombre_url} address={booking.prodId.address} description={booking.prodId.desc} category={booking.prodId.category.title} punctuation={booking.prodId.punctuation} score={booking.prodId.score} stars={booking.prodId.stars} services={booking.prodId.characteristic} latitude={booking.prodId.y} longitude={booking.prodId.x} />
                    </li>
                ))}
            </ul>
        </section>
        </>
    )
}

export default BookingList;