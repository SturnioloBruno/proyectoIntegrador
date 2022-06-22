import "../../styles/Booking/Details.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import Button from "../../components/Button";
import {useEffect,useState,useContext} from 'react';
import { SearchContext } from '../Context/SearchContext';

function Details({ src, name, category, address, city, stars}) {
   /*const dayStart = useContext(SearchContext).startDateCache._d.getDate();
    const monthStart = useContext(SearchContext).startDateCache._d.getMonth();
    const yearStart = parseInt(useContext(SearchContext).startDateCache._d
    const dayEnd = useContext(SearchContext).endDateCache._d.getDate();
    const monthEnd = useContext(SearchContext).endDateCache._d.getMonth();
    const yearEnd = parseInt(useContext(SearchContext).endDateCache._d.getFullYear().toString().substr(-2));*/

    const {endDateCache,startDateCache} = useContext(SearchContext);
    const [dateStartFormat,setDateStartFormat] = useState(null);
    let [dateEndFormat,setDateEndFormat]= useState(null); 

    useEffect(()=>{

        if(endDateCache&&startDateCache){

            //SI ES CON _d ES PORQUE DESDE QUE SE REALIZO LA BUSQUEDA NO SE TOCO LA FECHA, ENTONCES LO EVALUO
            if(endDateCache._d&&startDateCache._d){
                setDateStartFormat(startDateCache._d.getDate() +"/"+ startDateCache._d.getMonth() + "/" + startDateCache._d.getFullYear().toString().substr(-2))
                setDateEndFormat(endDateCache._d.getDate() +"/"+ endDateCache._d.getMonth() + "/" + endDateCache._d.getFullYear().toString().substr(-2) )
            }else{
                setDateStartFormat(startDateCache.getDate() +"/"+ startDateCache.getMonth() + "/" + startDateCache.getFullYear().toString().substr(-2))
                setDateEndFormat(endDateCache.getDate() +"/"+ endDateCache.getMonth() + "/" + endDateCache.getFullYear().toString().substr(-2) )
            }   
        }

    },[endDateCache,startDateCache])

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
                        <Button text="Confirmar reserva" className="btn button__solid-type" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;