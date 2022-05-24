function Category(props) {
    return (
        <article>
            <div>
                <h3>{props.title}</h3>
                <p>807.105 hoteles</p>
            </div>
            <img src={props.src} alt="Hotel" />
        </article>
    )
}

export default Category;