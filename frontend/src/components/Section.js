import Category from './cards/Category';
import Card from '../components/cards/Card';
import '../styles/Section.css';

function Section(props) {
    const type = props.type;
    return (
        <section>
            <h2>{props.title}</h2>
            {type == "Category" &&
            <ul className="ul__categories-list">
                {// Acá va el for con la BBDD de las categorías
                }
                <li><a href='#'><Category title="Hoteles" /></a></li>
                <li><a href='#'><Category title="Hotels" /></a></li>
                <li><a href='#'><Category title="Departamentos" /></a></li>
                <li><a href='#'><Category title="Bed and breakfast" /></a></li>
            </ul>
            }
            {type == "Card" &&
            <ul className="ul__accommodation-list">
                {// Acá va el for con la BBDD de los nombres de hoteles
                }
                <li><a href='#'><Card title="Hermitage Hotel" /></a></li>
                <li><a href='#'><Card title="Hermitage Hotel" /></a></li>
                <li><a href='#'><Card title="Hermitage Hotel" /></a></li>
                <li><a href='#'><Card title="Hermitage Hotel" /></a></li>
            </ul>
            }
        </section>
    )
}

export default Section;