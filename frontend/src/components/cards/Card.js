import Button from "../Button";

function Card(props) {
    return (
        <article>
           <div>
                <div>
                    <p>Hotel</p>
                </div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <span>8</span>
                <p>Muy bueno</p>
            </div>
            <p>A 940 m del centro <a href="#">mostrar en el mapa</a></p>
            <ul>
                <li>Wifi</li>
                <li>Piscina</li>
            </ul>
            <p>En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires. <a href="">más...</a></p>
            <Button text="ver más" />
        </article>
    )
}

export default Card;