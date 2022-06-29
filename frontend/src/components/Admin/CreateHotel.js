import { useEffect, useState } from 'react';
import HeaderProduct from "../Products/HeaderProduct";
import "../../styles/Admin/CreateHotel.css";

function CreateHotel() {
    const [categories, setCategories] = useState(null);
    const [cities, setCities] = useState(null);
    const [products, setProducts] = useState(null);
    let icon = [];

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

        //Cargo ciudades
        const getCities = async()=>{
            await fetch("http://localhost:8080/cities/getList",{
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

        //Cargo productos
        const getProducts = async()=>{
            await fetch("http://localhost:8080/products/getListProducts/", {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(response){
                return response.json();
            })
            .then(function (products) {
                setProducts(products);
            })
        }      
        getProducts();
    }, []);

    return (
        <>
        <HeaderProduct name="Administración de productos" />
        <section className="section__admin-create">
            <h3>Crear propiedad</h3>
            <form method='POST'>
                <section className='section__info-hotel'>
                    <label>
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
                    <label>
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
                    <label>
                        <span>Latitud</span>
                        <input type="text" placeholder="-59.1235862000" name="latitude" required />
                    </label>
                    <label>
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
                    <div>
                        <label>
                            <span>Nombre</span>
                            <select name="attribute" className="select__attribute" required>
                                {products?.map((product) => {
                                    {product.characteristic?.map((product, i) => {
                                        return <option key={i} value={product.characteristic.title}>{product.characteristic.title}</option>;
                                    })}
                                })}
                            </select>
                        </label>
                    </div>
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
                    <div>
                        <input type="text" placeholder="Insertar https://" name="img" required />
                        <button className='btn button__solid-type btn__upload-img'>Agregar</button>
                    </div>
                </section>
                <button type="submit" className='btn button__solid-type'>Crear</button>
            </form>
        </section>
        </>
    )
}

export default CreateHotel;