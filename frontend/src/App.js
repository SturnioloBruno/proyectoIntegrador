import React, {Fragment ,useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './Home';
import Product from './components/products/Product';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Result from "./components/Result";
import Footer from './components/Footer';

function App() {
  const [users,setUsers] = useState([])
  const [userLogged , setUserLogged] = useState(null) 

  const handlerUsers = (data)=>{
    setUsers([...users,data])
  }

  const handlerLogInOut = (user) =>{
    setUserLogged({user})
  }

  return (
    <Fragment>
      <Header user={userLogged} handlerLogOut={handlerLogInOut}/>
      
      <Routes>
        <Route path="/" element={<Home type="home" />} />
        <Route path="/product/:id" element={<Product type="product" />} />
        <Route path="/search/" element={<Result type="search" title="Resultado de búsqueda" />} />
        <Route path="/categories/" element={<Result type="categories" />} />
        <Route path="/login" element={<Login handlerLogIn={handlerLogInOut} users={users} type="login" />} />
        <Route path="/register" element={<Register type="register" handlerUser={handlerUsers}/>} />
      </Routes>

      <Footer />
    </Fragment>
  )
}

export default App;