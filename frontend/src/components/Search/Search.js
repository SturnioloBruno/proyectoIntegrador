import {useEffect,useState,useContext} from 'react';
import { useNavigate} from "react-router-dom";
import Button from "../Button";
import '../../styles/Search/Search.css';
import InputCity from './InputCity';
import InputDateRangePicker from './InputDateRangePicker';
import { SearchContext } from '../Context/SearchContext';
import Api from "../Helpers/Api";

function Search() {
    const inputLocality = document.getElementById("input__locality")
    const [cities, setCities] = useState(null);
    const [endDate,setEndDate] = useState(null);
    const [startDate,setStartDate] = useState(null);
    const [citySelected,setCitySelected] = useState(null);
    const navigate = useNavigate();
    const {setCityCache} = useContext(SearchContext);

    const handlerDates=(start,end)=>{
        setStartDate(start);
        setEndDate(end);
    }

    const handlerCity = (city)=>{
        setCitySelected(city)
    }

    useEffect(()=>{
        const getCities = async()=>{
            await fetch(Api + "cities/getList",{
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

        if(sessionStorage.getItem("dateStart")&&sessionStorage.getItem("dateEnd")){
            let objStart = new Date(sessionStorage.getItem("dateStart"))
            let objEnd = new Date(sessionStorage.getItem("dateEnd"))

            setEndDate(objStart);
            setStartDate(objEnd);   
        }

    },[]);

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

            let startSave = (startDate._d? startDate._d.getFullYear() : startDate.getFullYear()) + "/"+(startDate._d? startDate._d.getMonth()+1 : startDate.getMonth()+1) + "/" + (startDate._d? startDate._d.getDate() : startDate.getDate())
            let endSave = (endDate._d? endDate._d.getFullYear() : endDate.getFullYear()) + "/"+(endDate._d? endDate._d.getMonth()+1 : endDate.getMonth()+1) + "/" + (endDate._d? endDate._d.getDate() : endDate.getDate())
            sessionStorage.setItem("dateStart",JSON.stringify(startSave))
            sessionStorage.setItem("dateEnd",JSON.stringify(endSave))
      
        //Armo fechas, al mes se le suma 1 porque los meses van de 0 a 11.
        start = (startDate._d? startDate._d.getFullYear() : startDate.getFullYear()) + "-"+ 
        ((startDate._d? startDate._d.getMonth() : startDate.getMonth()+1)<=9?"0"+(startDate._d? startDate._d.getMonth()+1 : startDate.getMonth()+1):(startDate._d? startDate._d.getMonth() : startDate.getMonth()+1))+ "-" +
         (startDate._d? startDate._d.getDate()>9?startDate._d.getDate():"0"+startDate._d.getDate() : startDate.getDate()>9?startDate.getDate():"0"+startDate.getDate())
        end = (endDate._d? endDate._d.getFullYear() : endDate.getFullYear()) + "-"+ 
        ((endDate._d? endDate._d.getMonth() : endDate.getMonth()+1)<=9?"0"+(endDate._d? endDate._d.getMonth()+1 : endDate.getMonth()+1):(endDate._d? endDate._d.getMonth() : endDate.getMonth()+1))+ "-" + 
        (endDate._d? endDate._d.getDate()>9?endDate._d.getDate():"0"+endDate._d.getDate() : endDate.getDate()>9?endDate.getDate():"0"+endDate.getDate()) 
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
                    <InputDateRangePicker handlerDates={handlerDates}/>              
                </label>
                <Button text="Buscar" type="submit" className="btn button__solid-type" />
            </form>
        </section>
    )
}

export default Search;