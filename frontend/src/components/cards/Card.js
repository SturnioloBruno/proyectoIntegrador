import Button from "../Button";

function Card(props) {
    return (
        <article>
            <div>
                <div className="div__info-accommodation">
                    <div>
                        {// Acá va el endpoint de la categoría
                        }
                        <p className="p__category-name">Hotel</p>
                        <h3>{props.title}</h3>
                    </div>
                    <div className="div__puntuation-number">
                        <span>8</span>
                        <p>Muy bueno</p>
                    </div>
                </div>
                <p className="p__accommodation-direction">A 940 m del centro <a href="#">mostrar en el mapa</a></p>
                <ul className="ul__services-list">
                    {// Acá va el for con la BBDD de los servicios
                    }
                    <li className="li__wifi-icon">Wifi</li>
                    <li className="li__pool-icon">Piscina</li>
                </ul>
                {// Acá va el endpoint de las descripciones
                }
                <div className="div__show-text">
                    <p className="p__description-text">En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires. con 2 impresionantes piscinas, una en la terraza y otra al aire libre; habitaciones privadas.</p>
                    <a href="#">más...</a>
                </div>
                <Button text="ver más" className="btn button__solid-type" />
            </div>
            <img src={"https://images.unsplash.com/photo-1445991842772-097fea258e7b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"} alt="Hotel" />
        </article>
    )
}

export default Card;