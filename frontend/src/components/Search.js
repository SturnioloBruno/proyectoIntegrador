import {useEffect,useState} from 'react';
import {DateRangePicker} from 'react-dates';
import { Link } from "react-router-dom";
import Button from "./Button";
import '../styles/Search.css';
import 'react-dates/lib/css/_datepicker.css';
import '../styles/DateRangePicker.css';
import 'react-dates/initialize';
import Cities from "../data/cities.json";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

function Search() {
    const [startDate,setStartDate] = useState(null);
    const [endDate,setEndDate] = useState(null);
    const [focusedInput,setFocusedInpuf] = useState(null)
    const [qMonth,setQMonth] = useState(null)
    const inputLocality = document.getElementById("input__locality")
    const [cities,setCities] = useState(null)

    //evento para que cambie dinamicamente 
    window.visualViewport.addEventListener('resize',(e)=>{
        e.currentTarget.width<1024?setQMonth(1):setQMonth(2)
    })

    //Detecto el tamaño de la pantalla y muestro 1 o 2 meses.
    useEffect(()=>{
        //Seteo meses por inicio
        if (window.screen.width<1024){
            setQMonth(1);
        }else{
            setQMonth(2);
        }

        //Cargo ciudades
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
    },[])

    //Buscador
    const [searchTerm, setSearchTerm]= useState("");
    const [isActive, setActive] = useState(false);
    const toggle = () => { setActive(!isActive); };

    return (
        <section className="section__search-bar">
            <h2>Busca ofertas en hoteles, casas y mucho más</h2>
            <form>
                <label htmlFor="input__locality" className="input__text-location">
                    <input type="text" name="locality" placeholder="¿A dónde vamos?" id="input__locality" autoComplete='off'
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }} 
                    onClick={toggle} />
                    <ul className={isActive ? 'ul__list-location show': 'ul__list-location'} >
                    {cities?.filter((city) => {
                        if(searchTerm == "") {
                            return city;
                        } else if(city.cityName.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return city;
                        }
                    }).slice(0,4).map((city) => {
                        return (
                            <li key={city.cityName+city.id} onClick={(e)=>{
                                inputLocality.value = city.cityName + ", " + city.country
                                            toggle()
                                        }}>
                                <Link to="#">
                                    <div >
                                        <span className="span__city-text">{city.cityName}</span>
                                        <span className="span__country-text">{city.country}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                    </ul>
                </label>

                <label className="input__calendar-day">
                    
                <DateRangePicker
                    startDatePlaceholderText={"Check in"}
                    endDatePlaceholderText={"Check out"}
                    showDefaultInputIcon={true}
                    customArrowIcon={"-"}

                    startDate={startDate} //requerido
                    startDateId="your_unique_start_date_id" //requerido
                    endDate={endDate} //requerido
                    endDateId="your_unique_end_date_id" //requerido

                    onDatesChange={({ startDate, endDate }) => {
                        setStartDate(startDate);
                        setEndDate(endDate);
                    } } //Requerido

                    focusedInput={focusedInput} // Requerido
                    onFocusChange={focusedInput => setFocusedInpuf(focusedInput)} // Requerido

                    required={true}

                    monthFormat={"MMMM"} //formato de como muestra el Mes
                    numberOfMonths={qMonth} //cantidad de meses que muestra
                    />
                </label>
                <Button text="Buscar" type="submit" className="btn button__solid-type" />
            </form>
        </section>
    )
}

export default Search;