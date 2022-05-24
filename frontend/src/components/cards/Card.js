import Button from "../Button";

function Card(props) {
    return (
        <article>
            <div>
                <div className="div__info-accommodation">
                    <div>
                        <p className="p__category-name">{props.categ}</p>
                        <h3>{props.title}</h3>
                    </div>
                    <div className="div__puntuation-number">
                        <span>8</span>
                        <p>Muy bueno</p>
                    </div>
                </div>
                <p className="p__accommodation-direction">{props.location}<a href="#"> mostrar en el mapa</a></p>
                <ul className="ul__services-list">
                    {// Acá va el for con la BBDD de los servicios
                    }
                    <li className="li__wifi-icon">Wifi</li>
                    <li className="li__pool-icon">Piscina</li>
                </ul>
                <div className="div__show-text">
                    <p className="p__description-text">{props.desc}</p>
                    <a href="#">más...</a>
                </div>
                <Button text="ver más" className="btn button__solid-type" />
            </div>
            <img src={props.src} alt={props.title} />
        </article>
    )
}

export default Card;