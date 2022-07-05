import { Link, useParams } from "react-router-dom";
import "../../styles/Products/HeaderProduct.css";

function HeaderProduct({category, name, type}) {
    const {id} = useParams();

    return (
        <section className="section__header-product">
            <div className="div__info-name">
                <h2>{name}</h2>
                <p>{category}</p>
            </div>
            {type == "product" || type == "create" || type == "favourite" ?
            <Link to="/" className="a__show-more" /> :
            <Link to={`/product/${id}`} className="a__show-more" />
            }
        </section>
    )
}

export default HeaderProduct;