function Category(props) {
    return (
        <article>
            <div>
                <h3>{props.title}</h3>
                <p>807.105 hoteles</p>
            </div>
            <img src={"https://images.unsplash.com/photo-1618773928121-c32242e63f39?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"} alt="Hotel" />
        </article>
    )
}

export default Category;