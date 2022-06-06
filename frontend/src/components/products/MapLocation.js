import React from "react";
 
function MapLocation({city,latitude,longitude,title,address}) {
    return (
        <section className="section__map-location section__title-border">
            <h2>¿Dónde vas a estar?</h2>
            <p className="p__bold-style">{address}, {city}</p>
        </section>
    )
}

export default MapLocation;
