import React, {Fragment} from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Fragment>
  )
}

export default App;