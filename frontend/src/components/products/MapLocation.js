import React from "react";
import { MapContainer, TileLayer , Popup , Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility';
import '../../styles/products/Maps.css'

function MapLocation({city,latitude,longitude,title,address}) {
    return (
        <section className="section__map-location section__title-border">
            <h2>¿Dónde vas a estar?</h2>
            <p className="p__bold-style">{address}, {city}</p>
            <div>{latitude&&longitude?

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

            </MapContainer>:"Cargando.."/*VER QUE PONER CUANOD NO TIENE COORDENADAS*/}
            </div>
        </section>
    )
}

export default MapLocation;
