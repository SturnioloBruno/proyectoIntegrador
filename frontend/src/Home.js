import React, {Fragment} from 'react';
import Search from './components/Search';
import Section from './components/Section';
import './styles/Home.css';

function Home() {
  return (
    <Fragment>
        <Search />
        <Section title="Buscar por tipo de alojamiento" type="Category" />
        <Section title="Recomendaciones" type="Card" />
    </Fragment>
  )
}

export default Home;