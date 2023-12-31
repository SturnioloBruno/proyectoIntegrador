import { Link } from "react-router-dom";
import Button from "../Button";

function Card(props) {
    return (
        <article>
            <div>
                <div className="div__info-accommodation">
                    <div>
                        <p className="p__category-name">{props.category}</p>
                        <h3>{props.title}</h3>
                    </div>
                    <div className="div__puntuation-number">
                        <span>8</span>
                        <p>Muy bueno</p>
                    </div>
                </div>
                <p className="p__accommodation-direction">{props.location}<Link to="#"> mostrar en el mapa</Link></p>
                <ul className="ul__services-list">
                    <li className="li__wifi-icon">Wifi</li>
                    <li className="li__pool-icon">Piscina</li>
                </ul>
                <div className="div__show-text">
                    <p className="p__description-text">{props.description}</p>
                    <Link to="#">más...</Link>
                </div>
                <Button text="ver más" className="btn button__solid-type" />
            </div>
            <img src={props.src} alt={props.title} />
        </article>
    )
}

export default Card;