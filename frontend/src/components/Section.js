import Category from './cards/Category';
import Card from '../components/cards/Card';
import '../styles/Section.css';

function Section(props) {
    const type = props.type;
    return (
        <section>
            <h2>{props.title}</h2>
            {type == "Category" &&
            <ul className="ul__accommodation-list">
                {// Acá va el for con la BBDD de las categorías
                }
                <li><a href='#'><Category title="Hoteles" /></a></li>
                <li><a href='#'><Category title="Hotels" /></a></li>
                <li><a href='#'><Category title="Departamentos" /></a></li>
                <li><a href='#'><Category title="Bed and breakfast" /></a></li>
            </ul>
            }
            {type == "Card" &&
            <ul>
                {// Acá va el for con la BBDD de los nombres de hoteles
                }
                <li><Card title="Hermitage Hotel" /></li>
                <li><Card title="Hermitage Hotel" /></li>
                </ul>
            }
        </section>
    )
}

export default Section;