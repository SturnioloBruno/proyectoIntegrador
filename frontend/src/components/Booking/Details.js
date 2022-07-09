import "../../styles/Booking/Details.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import Button from "../../components/Button";
import {useEffect,useState,useContext} from 'react';
import { SearchContext } from '../Context/SearchContext';

function Details({ src, name, category, address, city, stars , change,error}) {
    const startDateCache = useContext(SearchContext);
    const endDateCache = sessionStorage.getItem("dateEnd")?sessionStorage.getItem("dateEnd"):null
    const [dateStartFormat,setDateStartFormat] = useState(null);
    let [dateEndFormat,setDateEndFormat]= useState(null); 
    

    useEffect(()=>{

        if(endDateCache&&startDateCache){

            if(sessionStorage.getItem("dateStart")&&sessionStorage.getItem("dateEnd")){
                let objStart = new Date(sessionStorage.getItem("dateStart"))
                let objEnd = new Date(sessionStorage.getItem("dateEnd"))
                setDateStartFormat(objStart.getDate() +"/"+ (objStart.getMonth() + 1) + "/" + objStart.getFullYear().toString().substr(-2))
                setDateEndFormat(objEnd.getDate() +"/"+ (objEnd.getMonth() + 1) + "/" + objEnd.getFullYear().toString().substr(-2) )
            }
    
        }

    },[change])

    return (
        <section className="section__booking-details">
            <div>
                <h2>Detalle de la reserva</h2>
                <div className="div__hotel-details">
                    <img src={src} alt={name} />
                    <div>
                        <p className="p__category-name">{category}</p>
                        <h3>{name}</h3>
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" size="small" defaultValue={stars + .0} value={stars + .0} precision={0.5} emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.5 }} />} readOnly />
                        </Stack>
                        <p className="p__accommodation-direction">{address + ", " + city}</p>
                        <ul>
                            <li>
                                <h4>Check in</h4>
                                <span>{dateStartFormat?dateStartFormat:"-/-/-"}</span>                  
                            </li>
                            <li>
                                <h4>Check out</h4>
                                <span>{dateEndFormat?dateEndFormat:"-/-/-"}</span>                         
                            </li>
                        </ul>
                        {error != null ? <p className='p__error'>{error}</p> : ""}
                        <Button text="Confirmar reserva" className="btn button__solid-type" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;