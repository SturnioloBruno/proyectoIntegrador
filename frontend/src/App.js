import React, {Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './Home';
import Product from './components/products/Product';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Result from "./components/Result";
import Footer from './components/Footer';
import { UserProvider } from './components/context/UserContext';
import { SearchProvider } from './components/context/SearchContext';

function App() {
  return (
    <Fragment>
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
      </Routes>

      <Footer />
      </SearchProvider>
      </UserProvider>
    </Fragment>
  )
}

export default App;