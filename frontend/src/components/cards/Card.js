import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { MapContainer, TileLayer , Popup , Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility';
import '../../styles/Products/Maps.css'
import '../../styles/Cards/Card.css'

function Card({id, title, src, address, description, category, punctuation, score, stars, services, latitude, longitude}) {
    const [modal,setModal] = useState(false);

    //Para ver la modal
    function viewModal(e) {
        e.preventDefault();
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(".div__map-modal").classList.remove("none");
        setModal(!modal);
    }

    //Para ver la modal
    function closeModal(e) {
        e.preventDefault();
        e.target.parentNode.parentNode.querySelector(".div__map-modal").classList.add("none");
        setModal(!modal);
    }

    return (
        <>
        <article>
            <div>
                <div className="div__info-accommodation">
                    <div>
                        <div className="div__category-stars">
                        <p className="p__category-name">{category}</p>
                        <Stack spacing={1}>
                                <Rating name="half-rating-read" size="small" defaultValue={stars} value={stars} precision={0.5} emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.5 }} />} readOnly />
                            </Stack>
                        </div>
                        <h3>{title}</h3>
                    </div>
                    <div className="div__puntuation-number">
                        <span>{punctuation}</span>
                        <p>{score}</p>
                    </div>
                </div>
                <p className="p__accommodation-direction">{address} <Link to="/" onClick={viewModal}>mostrar <span>en el mapa</span></Link></p>
                <ul className="ul__services-list">
                    {services?.map((service) => (
                        <li key={service.characteristic.id} className={`li__${(service.characteristic.title.toLowerCase().replace(/\s+/g, '-'))}`}>{service.characteristic.title}</li>
                    ))}
                </ul>
                <div className="div__show-text">
                    <p className="p__description-text">{description}</p>
                    <Link to="#">más...</Link>
                </div>
                <Link to={`/product/${id}`}className="btn button__solid-type">ver más</Link>
            </div>
            <img src={src} alt={title} />
        </article>
        
        <div id="mapModal" className="div__map-modal none">
            
            <Link to="#" className="a__close-modal" onClick={closeModal}>Cerrar</Link>

            {modal?
            <div>
            {latitude&&longitude?
                <MapContainer center={[latitude,longitude]} zoom={18} scrollWheelZoom={true}>
                
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latitude,longitude]} animate={true} title={title}>
                        <Popup>
                        <strong> {title}</strong> <br /> {address}
                        </Popup>
                    </Marker>

                </MapContainer>:"Cargando.."/*VER QUE PONER CUANOD NO TIENE COORDENADAS*/
            }
            </div>:""}

        </div>
        </> 
    )
}

export default Card;