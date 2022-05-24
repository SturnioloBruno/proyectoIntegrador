import Category from './cards/Category';
import Card from '../components/cards/Card';
import '../styles/Section.css';
import Categories from "../data/categories.json";

function Section({ type, title, src }) {
    console.log(Categories)
    return (
        <section>
            <h2>{title}</h2>
            {type == "Category" &&
            <ul className="ul__categories-list">
                {// Acá va el for con la BBDD de las categorías
                }
                {Categories.map((cat) => (
                    <li><a href='#'><Category title={cat.cat_titulo} src={cat.cat_url_img} /></a></li>
                ))}
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