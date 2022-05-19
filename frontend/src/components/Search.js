import Button from "./Button";

function Search() {
    return (
        <section>
            <h2>Busca ofertas en hoteles, casas y mucho más</h2>
            <form>
                <input type="text" name="locality" placeholder="¿A dónde vamos?" />
                <input type="calendar" name="day" placeholder="Check in - Check out" />
                <Button text="Buscar" type="submit" />
            </form>
        </section>
    )
}

export default Search;