function Category(props) {
    return (
        <article>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <img src={props.src} alt="Hotel" />
        </article>
    )
}

export default Category;