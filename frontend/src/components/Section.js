import Category from './cards/Category';
import Card from '../components/cards/Card';
import '../styles/Section.css';
import Categories from "../data/categories.json";
import Alojamientos from "../data/alojamiento.json";

function Section({ type, title, src }) {
    return (
        <section>
            <h2>{title}</h2>
            {type == "Category" &&
            <ul className="ul__categories-list">
                {Categories.map((cat) => (
                    <li><a href='#'><Category title={cat.cat_titulo} src={cat.cat_url_img} /></a></li>
                ))}
            </ul>
            }
            {type == "Card" &&
            <ul className="ul__accommodation-list">
                {Alojamientos.map((alo) => (
                    <li><a href='#'><Card title={alo.alo_titulo} /></a></li>
                ))}
            </ul>
            }
        </section>
    )
}

export default Section;