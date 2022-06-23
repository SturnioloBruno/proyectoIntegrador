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
    const [citySelected,setCitySelected] = useState(null);
    const navigate = useNavigate();
    const {setCityCache} = useContext(SearchContext);
    const { endDateCache,setEndDateCache,startDateCache,setStartDateCache } = useContext(SearchContext);

    const handlerDates=(start,end)=>{
        setStartDate(start);
        setEndDate(end);
    }

    const handlerCity = (city)=>{
        setCitySelected(city)
    }

    useEffect(()=>{
        const getCities = async()=>{
            await fetch("http://10.0.0.189/cities/getList",{
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

        //valido que ciudad o fecha tengan algo
        if(!citySelected&&!endDate&&!startDate){
            inputLocality.focus()
            return
        }

        if((!endDate&&startDate)||(endDate&&!startDate)){
            return 
        }
    
        if(citySelected){
            setCityCache({value:inputLocality.value.trim(),name:inputLocality.name})
        }

        let start,end;

        if(endDate&&startDate){
        setStartDateCache(startDate);
        setEndDateCache(endDate);
      
        //Armo fechas, al mes se le suma 1 porque los meses van de 0 a 11.
        start= `${startDate._d.getFullYear()}-${(startDate._d.getMonth()+1)>9?startDate._d.getMonth()+1:`0${startDate._d.getMonth()+1}`}-${startDate._d.getDate()}`; 
        end = `${endDate._d.getFullYear()}-${(endDate._d.getMonth()+1)>9?endDate._d.getMonth()+1:`0${endDate._d.getMonth()+1}`}-${endDate._d.getDate()}`; 
        }
       
        navigate(`/search/?${citySelected?`city=${citySelected}&`:""}${startDate&&endDate?`dateStart=${start}&dateEnd=${end}`:""}`);
    }

    return (
        <section className="section__search-bar">
            <h2>Busca ofertas en hoteles, casas y mucho más</h2>
            <form method='POST' onSubmit={handlerSubmit}>
                <label htmlFor="input__locality" className="input__text-location">
                    <InputCity cities={cities} handlerCity={handlerCity}/>            
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