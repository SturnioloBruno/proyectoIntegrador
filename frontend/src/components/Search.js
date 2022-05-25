import Button from "./Button";
import '../styles/Search.css';
import 'react-dates/lib/css/_datepicker.css';
import {useEffect,useState} from 'react';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import '../styles/DateRangePicker.css';
import Cities from "../data/cities.json";

function Search() {
    const [startDate,setStartDate] = useState(null);
    const [endDate,setEndDate] = useState(null);
    const [focusedInput,setFocusedInpuf] = useState(null)
    const [qMonth,setQMonth] = useState(null)

    //evento para que cambie dinamicamente 
    window.visualViewport.addEventListener('resize',(e)=>{
        e.currentTarget.width<1024?setQMonth(1):setQMonth(2)
    })

    //Detecto el tamaño de la pantalla y muestro 1 o 2 meses.
    useEffect(()=>{
        if (window.screen.width<1024){
            setQMonth(1);
        }else{
            setQMonth(2);
        }
    },[])

    //Buscador
    const [searchTerm, setSearchTerm]= useState("");
    const [isActive, setActive] = useState(false);
    const toggle = () => { setActive(!isActive); };

    return (
        <section className="section__search-bar">
            <h2>Busca ofertas en hoteles, casas y mucho más</h2>
            <form>
                <label htmlFor="" className="input__text-location">
                    <input type="text" name="locality" placeholder="¿A dónde vamos?" id="" 
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }} 
                    onClick={toggle} />
                    <ul className={isActive ? 'ul__list-location show': 'ul__list-location'} >
                    {Cities.filter((city) => {
                        if(searchTerm == "") {
                            return city;
                        } else if(city.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return city;
                        }
                    }).map((city) => {
                        return (
                            <li>
                                <a href="#">
                                    <div>
                                        <span class="span__city-text">{city.city}</span>
                                        <span class="span__country-text">{city.country}</span>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                    </ul>
                </label>

                <label htmlFor="" className="input__calendar-day">
                    
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

                    monthFormat={"MMM"} //formato de como muestra el Mes
                    numberOfMonths={qMonth} //cantidad de meses que muestra
                    />
                </label>
                <Button text="Buscar" type="submit" className="btn button__solid-type" />
            </form>
        </section>
    )
}

export default Search;