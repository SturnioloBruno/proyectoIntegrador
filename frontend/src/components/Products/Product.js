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

function Product() {
    const mobileTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const desktop = useMediaQuery({ query: '(min-width: 1025px)' });
    const [product, setProduct] = useState(null);
    const [punctuation, setPunctuation] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        //Cargo datos del producto
        const getProduct = async()=>{
            await fetch("http://10.0.0.189/products/findById/" + id,{
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
            await fetch("http://10.0.0.189/punctuations/findById/" + id,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then(function(respuesta){
                return respuesta.json();
            })
            .then(function (punctuation) {
                setPunctuation(punctuation);
            })
        }
        getPunctuation();
    }, [id]);

    //Para ver la modal
    function viewModal(e) {
        e.preventDefault();
        document.querySelector(".div__modal-share").classList.remove("none");
    }

    return <><article className="article__info-product">
        <HeaderProduct name={product?.name} category={product?.category.title} />
        <InfoProduct address={product?.address} punctuation={product?.punctuation} stars={punctuation?.punctValue} score={product?.score} />
        <div className="div__img-actions">
            <div className="div__buttons-bar">
                <Link to="#" className="a__share-icon" onClick={viewModal}>Compartir</Link>
                <Link to="#" className="a__like-icon">Me gusta</Link>
            </div>
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