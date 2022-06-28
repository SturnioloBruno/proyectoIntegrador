import { useEffect, useState, useContext } from 'react';
import HeaderProduct from "../Products/HeaderProduct";
import Card from '../Cards/Card';
import { UserContext } from '../Context/UserContext';
import "../../styles/Booking/BookingList.css";

function BookingList() {
    const [users, setUsers] = useState(null);
    const {user} = useContext(UserContext);
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const [bookings, setBookings] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(()=>{
        //Cargo usuarios
        const getUsers = async()=>{
            await fetch("http://localhost:8080/users/findById/" + userId, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(response){
                return response.json();
            })
            .then(function (response) {
                setUsers(users);
            })
        }
        getUsers();

        //Cargo reservas del usuario
        const getBookings = async()=>{
            await fetch("http://localhost:8080/products/bookings/findByUserId/" + userId,{
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
    }, [user]);

    return (
        <>
        <HeaderProduct name="Mis reservas" />
        <section className="section__booking-list">
            <ul className="ul__accommodation-list">
                {bookings?.map((booking) => (
                    <li key={booking.id+"-prod"}><Card id={booking.id} title={booking.name} src={booking.images[0]?.nombre_url} address={booking.address} description={booking.desc} category={booking.category.title} punctuation={booking.punctuation} score={booking.score} stars={booking.stars} services={booking.characteristic} latitude={booking.y} longitude={booking.x} /></li>
                ))}
            </ul>
        </section>
        </>
    )
}

export default BookingList;