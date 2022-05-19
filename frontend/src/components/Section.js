import Category from './cards/Category';

function Section(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <ul>
                <li><Category title="Hoteles" /></li>
                <li><Category title="Hotels" /></li>
                <li><Category title="Departamentos" /></li>
                <li><Category title="Bed and Breakfast" /></li>
            </ul>
        </section>
    )
}

export default Section;