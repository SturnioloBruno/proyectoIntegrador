import { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Category from './Cards/Category';
import Card from './Cards/Card';
import '../styles/Section.css';
import { UserContext } from './Context/UserContext';

function Section({ type, title }) {
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);
    const {user} = useContext(UserContext);

    useEffect(()=>{
        if(type==="Category"){
            //Cargo categorías
            const getCategories = async()=>{
                await fetch("http://localhost:8080/categories/getList",{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                .then(function(respuesta){
                    return respuesta.json();
                })
                .then(function (categories) {
                    setCategories(categories);
                })
            }
            getCategories();
        }

        if(type==="Card"){
            //Cargo productos
            const getProducts = async()=>{
                await fetch(`http://localhost:8080/products/getListProducts${user?"?sort=true":"?sort=false"}`,{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                .then(function(respuesta){
                    return respuesta.json();
                })
                .then(function (products) {
                    setProducts(products)
                })
            }
            getProducts();
        }
    },[type,user]);

    return (
        <>
        <section>
            <h2>{title}</h2>
            {type === "Category" &&
            <ul className="ul__categories-list">
                {categories?.map((category) => (
                    <li key={category.id+"-cat"}><Link to={`/categories/?category=${category.id}`}><Category title={category.title} description={category.desc} src={category.urlImagen} />
                    </Link></li>
                ))}
            </ul>
            }
            {type === "Card" &&
            <ul className="ul__accommodation-list">
                {products?.map((product) => (
                    <li key={product.id+"-prod"}><Card id={product.id} title={product.name} src={product.images[0]?.nombre_url} address={product.address} description={product.desc} category={product.category.title} punctuation={product.punctuation} score={product.score} stars={product.stars} services={product.characteristic} latitude={product.y} longitude={product.x} /></li>
                ))}
            </ul>
            }
        </section>
        </>
    )
}

export default Section;