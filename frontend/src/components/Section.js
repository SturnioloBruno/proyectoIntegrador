import Category from './cards/Category';
import Card from '../components/cards/Card';
import '../styles/Section.css';
import Categories from "../data/categories.json";
import Acommodations from "../data/acommodations.json";

function Section({ type, title }) {
    return (
        <section>
            <h2>{title}</h2>
            {type == "Category" &&
            <ul className="ul__categories-list">
                {Categories.map((category) => (
                    <li><a href='#'><Category title={category.cat_titulo} description={category.description} src={category.cat_url_img} /></a></li>
                ))}
            </ul>
            }
            {type == "Card" &&
            <ul className="ul__accommodation-list">
                {Acommodations.map((acommodation) => (
                    <li><a href='#'><Card title={acommodation.alo_title} src={acommodation.alo_url_img} location={acommodation.alo_location} desc={acommodation.alo_description} categ={acommodation.alo_category}/></a></li>
                ))}
            </ul>
            }
        </section>
    )
}

export default Section;