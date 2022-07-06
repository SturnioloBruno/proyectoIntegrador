import React,{useState,useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useParams } from "react-router-dom";
import HeaderProduct from './HeaderProduct';
import InfoProduct from './InfoProduct';
import GalleryMobile from "./GalleryMobile";
import GalleryDesktop from "./GalleryDesktop";
import DescriptionHotel from "./DescriptionHotel";
import LocationServices from "./LocationServices";
import MapLocation from "./MapLocation";
import Politics from './Politics';
import HotelDate from "./HotelDate";
import Share from './Share';
import "../../styles/Products/Product.css";
import Api from "../Helpers/Api";

function Product() {
    const mobileTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const desktop = useMediaQuery({ query: '(min-width: 1025px)' });
    const [product, setProduct] = useState(null);
    const [punctuation, setPunctuation] = useState(null);
    const {id} = useParams();
    const token = localStorage.getItem("token");
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const [productLike, setProductLike] = useState(null);

    useEffect(()=>{
        //Cargo datos del producto
        const getProduct = async()=>{
            await fetch(Api + "products/findById/" + id,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(respuesta){
                return respuesta.json();
            })
            .then(function (product) {
                setProduct(product);
            })
        }      
        getProduct();
        
        //Cargo puntuación
        const getPunctuation = async()=>{
            await fetch(Api + "punctuations/findById/" + id,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(response){
                return response.json();
            })
            .then(function (punctuation) {
                setPunctuation(punctuation);
            })
        }
        getPunctuation();

        //Ver producto en favoritos
        const getProductLike = async()=>{
            await fetch(Api + "favourites/findByUserId/" + userId, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(response){
                return response.json();
            })
            .then(function(productLike) {
                setProductLike(productLike);
            })
        }
        getProductLike();
    }, [id]);

    //Para ver la modal
    function viewModal(e) {
        e.preventDefault();
        document.querySelector(".div__modal-share").classList.remove("none");
    }

    //Producto agregado a favoritos
    if(Array.isArray(productLike)) {
        {productLike?.map((like) => {
            if(like.prodId.id == id) document.querySelector(".a__like-icon").classList.add("like");
        })}
    } else {
        if(productLike != null && productLike.prodId.id == id) document.querySelector(".a__like-icon").classList.add("like");
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        const insertFavourite = async()=>{
            await fetch(Api + "favourites/insert/", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Headers" : "Content-Type",
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    prodId: {id: id},
                    userId: {id: userId}
                }),
            })
            .then((response) => {
                return response.json();
            })
            .then(function(productLike) {
                setProductLike(productLike);
            })
        }
        insertFavourite();
    }

    return <><article className="article__info-product">
        <HeaderProduct type="home" name={product?.name} category={product?.category.title} />
        <InfoProduct address={product?.address} punctuation={product?.punctuation} stars={punctuation?.punctValue} score={product?.score} />
        <div className="div__img-actions">
            <form method='POST' className="div__buttons-bar" onSubmit={handlerSubmit}>
                <Link to="#" className="a__share-icon" onClick={viewModal}>Compartir</Link>
                <button type="submit" className="a__like-icon">Me gusta</button>
            </form>
            {mobileTablet && <GalleryMobile srcImg={product?.images} altImg={product?.category.title} />}
            {desktop && <GalleryDesktop srcImg={product?.images} altImg={product?.category.title} />}
        </div>
        <DescriptionHotel title={product?.descTitle} text={product?.desc} />
        <LocationServices services={product?.characteristic} />
        <HotelDate id={product?.id} bookings={product?.bookings}/>
        <MapLocation city={product?
            product.city?.cityName + ". " + product.city?.country
            :""} latitude={product?.y} longitude={product?.x} title={product?.descTitle} address={product?.address}/>
        <Politics policy={product?.policy} />
    </article>
    <Share />
    </>
}

export default Product;