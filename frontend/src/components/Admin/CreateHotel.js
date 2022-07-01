import { useEffect, useState, useRef } from 'react';
import HeaderProduct from "../Products/HeaderProduct";
import "../../styles/Admin/CreateHotel.css";
import Api from "../Helpers/Api";
import UploadImages from './UploadImages';
import UploadAttributes from "./UploadAttributes";

function CreateHotel({type}) {
    const [categories, setCategories] = useState(null);
    const [cities, setCities] = useState(null);
    
    useEffect(()=>{
        //Cargo categorías
        const getCategories = async()=>{
            await fetch("http://localhost:8080/categories/getList/",{
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

        //Cargo ciudades
        const getCities = async()=>{
            await fetch("http://localhost:8080/cities/getList/",{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(respuesta){
                return respuesta.json();
            })
            .then(function (cities) {
                setCities(cities);
            })
        }
        getCities();

        //Inserto nuevo producto
        const insertProduct = async()=>{
            await fetch("http://localhost:8080/products/insert/", {
                method:'POST',
                headers: {
                    "Access-Control-Allow-Headers" : "Content-Type",
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    address: document.querySelector(".label__address-info input").value,
                    name: document.querySelector(".label__name-info input").value,
                    descTitle: document.querySelector(".label__name-info input").value,
                    desc: document.querySelector(".label__description textarea").value,
                    x: document.querySelector(".label__latitude-info input").value,
                    y: document.querySelector(".label__longitude-info input").value
                })
            })
            .then((response) => {
                return response.json();
            })
        }
        insertProduct();
    }, []);

    return (
        <>
        <HeaderProduct name="Administración de productos" type={type} />
        <section className="section__admin-create">
            <h3>Crear propiedad</h3>
            <form method='POST'>
                <section className='section__info-hotel'>
                    <label className='label__name-info'>
                        <span>Nombre de la propiedad</span>
                        <input type="text" placeholder="Hotel Hermirage" name="hotel_name" required />
                    </label>
                    <label>
                        <span>Categoría</span>
                        <select name="category" className="select__option" required>
                            {categories?.map((category, i) => {
                                return <option key={i} value={category.title}>{category.title}</option>;
                            })}
                        </select>
                    </label>
                    <label className='label__address-info'>
                        <span>Dirección</span>
                        <input type="text" placeholder="Av. Colón 1643" name="address" required />
                    </label>
                    <label>
                        <span>Ciudad</span>
                        <select name="city" className="select__option" required>
                            {cities?.map((city, i) => {
                                return <option key={i} value={city.cityName}>{city.cityName}</option>;
                            })}
                        </select>
                    </label>
                    <label className='label__latitude-info'>
                        <span>Latitud</span>
                        <input type="text" placeholder="-59.1235862000" name="latitude" required />
                    </label>
                    <label className='label__longitude-info'>
                        <span>Longitud</span>
                        <input type="text" placeholder="-34.5641632000" name="longitude" required />
                    </label>
                    <label className="label__description">
                        <span>Descripción</span>
                        <textarea name="description" placeholder='Escribir aquí' required></textarea>
                    </label>
                </section>
                <section className='section__info-attributes'>
                    <h3>Agregar atributos</h3>
                    <UploadAttributes />
                </section>
                <section className='section__info-policies'>
                    <h3>Políticas del producto</h3>
                    <ul>
                        <li>
                            <h4>Normas de la casa</h4>
                            <h5>Descripción</h5>
                            <textarea name="rules" placeholder='Escribir aquí' required></textarea>
                        </li>
                        <li>
                            <h4>Salud y seguridad</h4>
                            <h5>Descripción</h5>
                            <textarea name="rules" placeholder='Escribir aquí' required></textarea>
                        </li>
                        <li>
                            <h4>Política de cancelación</h4>
                            <h5>Descripción</h5>
                            <textarea name="rules" placeholder='Escribir aquí' required></textarea>
                        </li>
                    </ul>
                </section>
                <section className='section__upload-images'>
                    <h3>Cargar imágenes</h3>
                    <UploadImages />
                </section>
                <button type="submit" className='btn button__solid-type'>Crear</button>
            </form>
        </section>
        </>
    )
}

export default CreateHotel;