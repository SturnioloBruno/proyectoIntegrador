import React from "react";
import BingMapsReact from "./BingMapsReact";

 document.addEventListener('touchstart', ()=>{},true);
 document.addEventListener('touchmove', ()=>{},true);
 
function MapLocation({city,latitude,longitude,title,address}) {
    const pushPin = { //https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-concepts/pushpins/
        center: {       //https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/pushpinoptions-object
          latitude: latitude,
          longitude: longitude,
        },
        options: {
          title: title,
          subTitle: address,
          color: "red",
         // icon: url icon o archivo

        },
      }

     

    return (
        <section className="section__map-location section__title-border">
            <h2>¿Dónde vas a estar?</h2>
            <p className="p__bold-style">{address}, {city}</p>
            <div>
            {latitude||longitude?
             <BingMapsReact
                    bingMapsKey="Avx7xDjk_K4oxoc4Eku_6RCrJHfKleMgQ6FAH7VE-husFiim8ujnaiUVkZhVNqda"
                    height="500px" 
                    pushPins={[pushPin]}
                    mapOptions={{
                        navigationBarMode: "minified", //https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/navigationbarmode-enumeration
                        showTrafficButton:true, //habilito boton trafico
                    }}
                    viewOptions={{
                        center: { latitude: latitude , longitude:longitude },
                        mapTypeId: "road", //tipos de mapas  https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-api/maptypeid-enumeration
                        zoom: 16
                    }}/>
                    
                    :<p>Cargando..</p>   //ver que mostrar si no tiene datos de coordenadas             
            }</div>       
        </section>
    )
}

export default MapLocation;