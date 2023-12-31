import { Link } from "react-router-dom";

function HeaderProduct({category, name}) {
    return (
        <section className="section__header-product">
            <div className="div__info-name">
                <h2>Hermitage Hotel</h2>
                <p>Hotel</p>
            </div>
            {/*<h2>${name}</h2>
            <p>${category}</p>*/}
            <Link to="/" className="a__show-more" />
        </section>
    )
}

export default HeaderProduct;