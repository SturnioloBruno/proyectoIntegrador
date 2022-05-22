import Button from "./Button";
import '../styles/Search.css';

function Search() {
    return (
        <section className="section__search-bar">
            <h2>Busca ofertas en hoteles, casas y mucho más</h2>
            <form>
                <label htmlFor="" className="input__text-location">
                    <input type="text" name="locality" placeholder="¿A dónde vamos?" id="" />
                </label>
                <label htmlFor="" className="input__calendar-day">
                    <input type="calendar" name="day" placeholder="Check in - Check out" id="" />
                </label>
                <Button text="Buscar" type="submit" className="btn button__solid-type" />
            </form>
        </section>
    )
}

export default Search;