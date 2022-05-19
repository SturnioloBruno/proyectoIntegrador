import React, {Fragment} from 'react';
import Category from './cards/Category';
import Card from '../components/cards/Card';

function Section(props) {
    const type = props.type;
    return (
        <section>
            <h2>{props.title}</h2>
            <ul>
                {type == "Category" &&
                <Fragment>
                    {// Acá va el for con la BBDD de las categorías
                    }
                    <li><Category title="Hoteles" /></li>
                    <li><Category title="Hotels" /></li>
                    <li><Category title="Departamentos" /></li>
                    <li><Category title="HotBed and breakfasteles" /></li>
                </Fragment>
                }
                {type == "Card" &&
                <Fragment>
                    {// Acá va el for con la BBDD de los nombres de hoteles
                    }
                    <li><Card title="Hermitage Hotel" /></li>
                    <li><Card title="Hermitage Hotel" /></li>
                </Fragment>
                }
            </ul>
        </section>
    )
}

export default Section;