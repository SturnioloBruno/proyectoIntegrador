import {useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import Category from './cards/Category';
import Card from '../components/cards/Card';
import '../styles/Section.css';
import Acommodations from "../data/acommodations.json";

function Section({ type, title }) {
    
    const[categories,setCategories] = useState(null)
    useEffect(()=>{
        //Cargo Categorias
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
    },[])

    return (
        <section>
            <h2>{title}</h2>
            {type == "Category" &&
            <ul className="ul__categories-list">
                {categories?.map((category) => (
                    <li key={category.id}><Link to='#'><Category title={category.cat_title} description={category.cat_desc} src={category.cat_url_img} />{console.log(category)}
                    </Link></li>
                ))}
            </ul>
            }
            {type == "Card" &&
            <ul className="ul__accommodation-list">
                {Acommodations.map((acommodation) => (
                    <li key={acommodation.alo_id}><Link to='#'><Card title={acommodation.alo_title} src={acommodation.alo_url_img} location={acommodation.alo_location} description={acommodation.alo_description} category={acommodation.alo_category}/></Link></li>
                ))}
            </ul>
            }
        </section>
    )
}

export default Section;