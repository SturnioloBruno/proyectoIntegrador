import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Search from '../components/Search';
import Card from '../components/cards/Card';
import "../styles/Home.css";

function Home() {
  const [productsCities, setProductsCities] = useState(null);
  const {id} = useParams();

  useEffect(()=>{
    //Cargo productos por ciudad
    const getProductsperCities = async()=>{
        await fetch("http://localhost:8080/products/getListProductsByCityId?id=" + id, {
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
  },[]);

  return (
    <>
        <Search />
        <section>
          <h2>Resultado de búsqueda</h2>
          <ul className="ul__accommodation-list">
            {productsCities?.map((city) => {
              return <li key={city?.id}><Link to={`/product/${city?.id}`}><Card title={city?.name} src={city?.category.urlImagen} location={city?.adress} description={city?.desc} category={city?.category.title} punctuation={city?.punctuation} score={city?.score} /></Link></li>;
            })}
          </ul>
        </section>
    </>
  )
}

export default Home;