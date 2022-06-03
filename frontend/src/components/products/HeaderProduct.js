import { Link } from "react-router-dom";

function HeaderProduct({category, name}) {
    return (
        <section className="section__header-product">
            <div className="div__info-name">
                <h2>{name}</h2>
                <p>{category}</p>
            </div>
            <Link to="/" className="a__show-more" />
        </section>
    )
}

export default HeaderProduct;