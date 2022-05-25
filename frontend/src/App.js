import React, {Fragment ,useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Footer from './components/Footer';

function App() {
  const [user,setUser] = useState(null)
  const handlerUser = ({nombre,apellido})=>{
    nombre?
    setUser({nombre:nombre,apellido:apellido}):
    setUser(null)
  }

  return (
    <Fragment>
      <Header user={user} handlerUser={handlerUser}/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handlerUser={handlerUser} type="login" />} />
        <Route path="/register" element={<Register type="register" />} />
      </Routes>

      <Footer />
    </Fragment>
  )
}

export default App;