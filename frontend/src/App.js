import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './Home';
import Product from './components/Products/Product';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Result from "./components/Result";
import Footer from './components/Footer';
import SuccessfulBooking from "./components/Booking/SuccessfulBooking";
import Booking from "./components/Booking/Booking";
import { UserProvider } from './components/Context/UserContext';
import { SearchProvider } from './components/Context/SearchContext';
import Meta from './components/Meta';
import CreateHotel from './components/Admin/CreateHotel';
import BookingList from "./components/Booking/BookingList";
import FavouritesList from './components/Favourites/FavouritesList';

function App() {
  return (
    <Fragment>
      <Meta/>
      <UserProvider>
        <SearchProvider>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home type="home" />} />
        <Route path="/product/:id" element={<Product type="product" />} />
        <Route path="/search/" element={<Result type="search" title="Resultado de búsqueda" />} />
        <Route path="/categories/" element={<Result type="categories" />} />
        <Route path="/login" element={<Login  type="login" />} />
        <Route path="/register" element={<Register type="register" />} />
        <Route path="/product/:id/booking" element={<Booking type="booking" />} />
        <Route path="/booking-ok" element={<SuccessfulBooking type="booking-ok" />} />
        <Route path="/administracion" element={<CreateHotel type="create" />} />
        <Route path="/create-ok" element={<SuccessfulBooking type="create-ok" />} />
        <Route path="/my-bookings" element={<BookingList type="booking-list" />} />
        <Route path="/accountconfirmation/:id" element={<SuccessfulBooking type="confimation-ok" />} />
        <Route path="/my-favourites" element={<FavouritesList type="favourite" />} />
      </Routes>

      <Footer />
      </SearchProvider>
      </UserProvider>
    </Fragment>
  )
}

export default App;