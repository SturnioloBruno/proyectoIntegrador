import {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import Category from './cards/Category';
import Card from '../components/cards/Card';
import '../styles/Section.css';

function Section({ type, title }) {
    const[categories, setCategories] = useState(null);
    const[products, setProducts] = useState(null);

    useEffect(()=>{
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
    },[]);

    useEffect(()=>{
        //Cargo productos
        const getProducts = async()=>{
            await fetch("http://localhost:8080/products/getListProducts",{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(respuesta){
                return respuesta.json();
            })
            .then(function (products) {
                setProducts(products);
            })
        }
        getProducts();
    },[]);

    return (
        <section>
            <h2>{title}</h2>
            {type == "Category" &&
            <ul className="ul__categories-list">
                {categories?.map((category) => (
                    <li key={category.id}><Link to='#'><Category title={category.title} description={category.desc} src={category.urlImagen} />
                    </Link></li>
                ))}
            </ul>
            }
            {type == "Card" &&
            <ul className="ul__accommodation-list">
                {products?.map((product) => (
                    <li key={product.id}><Link to={`/product/${product.id}`}><Card title={product.name} src={product.category.urlImagen} location={product.adress} description={product.desc} category={product.category.title} punctuation={product.punctuation} score={product.score} /></Link></li>
                ))}
            </ul>
            }
        </section>
    )
}

export default Section;