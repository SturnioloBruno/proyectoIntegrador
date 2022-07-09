import React,{useEffect} from 'react';
import { Link , useParams} from "react-router-dom";
import "../../styles/Booking/SuccessfulBooking.css";
import Api from "../Helpers/Api";

function SuccessfulBooking({type}) {
    const {id} = useParams();

    useEffect(()=>{
        if (type === "confimation-ok"){
            const register = async() => {
                await fetch(Api + `users/accountConfirmation/${id}`, {
                    method:'POST',
                    headers:{
                        "Access-Control-Allow-Headers" : "Content-Type",
                        'Access-Control-Allow-Origin':"*",
                        'Content-Type':'application/json'
                    }
                })
                .then((response) => {
                    if(response.status === 201) {               
                            return response.json()         
                    } else if(response.status === 406) {
                     //  setError({password:["Ya existe un usuario con el email ingresado"]})
                     console.log(response);
                       return
                    } else {
                        console.log(response);
                      //  setError({password:["Lamentablemente no ha podido registrarse. Por favor intente más tarde"]})
                        return
                    }
                  })
                  .catch((error) => {
                  //  setError({password:["Error, intente de nuevo mas tarde"]})
                    return
                  });
            }
            register();
        }

    },[id,type])

    return (
        <section className="section__successful-booking">
            {type === "booking-ok" || type === "create-ok" || type === "confimation-ok" ?
                <div className='div__successful-booking'>
                    {type === "booking-ok" &&
                        <>
                        <h2>¡Muchas gracias!</h2>
                        <p>Su reserva se ha realizado con éxito</p>
                        <Link to="/" className="btn button__solid-type">ok</Link>
                        </>
                    }
                    {type === "create-ok" &&
                        <>
                        <p>Tu propiedad se ha creado con éxito</p>
                        <Link to="/" className="btn button__solid-type">Volver</Link>
                        </>
                    }
                    {type === "confimation-ok" &&
                        <>
                        <p>Email confirmado con éxito</p>
                        <Link to="/" className="btn button__solid-type">Volver</Link>
                        </>
                    }
                </div> :
                <div className='div__denegate-booking'>
                    {type === "favourite" &&
                        <>
                        <p>Aún no has agregado ningún alojamiento a tu lista de favoritos</p>
                        <Link to="/" className="btn button__solid-type">Volver</Link>
                        </>
                    }
                    {type === "booking-list" &&
                        <>
                        <p>Aún no has efectuado ninguna reserva</p>
                        <Link to="/" className="btn button__solid-type">Volver</Link>
                        </>
                    }
                     {type === "denegate" &&
                        <>
                        <p>No tienes permisos de administrador para ingresar a esta seccion</p>
                        <Link to="/" className="btn button__solid-type">Volver</Link>
                        </>
                    }
                </div>
            }
        </section>
    )
}

export default SuccessfulBooking;