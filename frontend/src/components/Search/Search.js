import {useEffect,useState,useContext} from 'react';
import { useNavigate} from "react-router-dom";
import Button from "../Button";
import '../../styles/Search/Search.css';
import InputCity from './InputCity';
import InputDateRangePicker from './InputDateRangePicker';
import { SearchContext } from '../Context/SearchContext';

function Search() {
    const inputLocality = document.getElementById("input__locality")
    const [cities, setCities] = useState(null);
    const [endDate,setEndDate] = useState(null);
    const [startDate,setStartDate] = useState(null);
    const navigate = useNavigate();
    const {setCityCache} = useContext(SearchContext);
    const { endDateCache,setEndDateCache,startDateCache,setStartDateCache } = useContext(SearchContext);

    const handlerDates=(start,end)=>{
        setStartDate(start);
        setEndDate(end);
    }

    useEffect(()=>{
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

        if(endDateCache&&startDateCache){
            setEndDate(endDateCache);
            setStartDate(startDateCache);
        }
    },[endDateCache,startDateCache]);

    const handlerSubmit = (e)=>{
        e.preventDefault();

        if(inputLocality.value.trim()===""){
            inputLocality.focus()
            return
        }

        if(!startDate&&!endDate){
            //ver de hacer focus en los input de fechas          
            return 
        }

        setStartDateCache(startDate);
        setEndDateCache(endDate);
        setCityCache({value:inputLocality.value.trim(),name:inputLocality.name})
        navigate("/search/"+inputLocality.name);
    }

    return (
        <section className="section__search-bar">
            <h2>Busca ofertas en hoteles, casas y mucho más</h2>
            <form method='POST' onSubmit={handlerSubmit}>
                <label htmlFor="input__locality" className="input__text-location">
                    <InputCity cities={cities}/>            
                </label>
                <label className="input__calendar-day">
                    <InputDateRangePicker handlerDates={handlerDates} endDateCache={endDateCache} startDateCache={startDateCache}/>              
                </label>
                <Button text="Buscar" type="submit" className="btn button__solid-type" />
            </form>
        </section>
    )
}

export default Search;