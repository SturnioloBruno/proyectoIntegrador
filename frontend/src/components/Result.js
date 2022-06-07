import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Search from '../components/Search';
import Card from '../components/cards/Card';
import "../styles/Home.css";

function Home({title}) {
  const [productsCities, setProductsCities] = useState(null);
  const location = useLocation();

  useEffect(()=>{
    console.log(location);
    //Cargo productos por ciudad
    const getProductsperCities = async()=>{
        await fetch("http://localhost:8080/products/getListProducts/" + location.search, {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function (productsCities) {
            setProductsCities(productsCities);
        })
    }
    getProductsperCities();
  },[location]);

  const category = productsCities?.slice(0,1).map((category) => category?.category.title);

  return (
    <>
        <Search />
        <section className='section__cards-results'>
          <h2>{title == undefined ? `Resultados de: ${category}` : title}</h2>
          <ul className="ul__accommodation-list">
            {productsCities?.map((city) => {
              return <li key={city?.id}><Card id={city?.id} title={city?.name} src={city?.category.urlImagen} location={city?.address} description={city?.desc} category={city?.category.title} punctuation={city?.punctuation} stars={city?.stars} score={city?.score} /></li>;
            })}
          </ul>
        </section>
    </>
  )
}

export default Home;