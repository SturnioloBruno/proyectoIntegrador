import React, {Fragment} from 'react';
import Search from './components/Search';
import Section from './components/Section';
import './styles/Home.css';

function Home({ type }) {
  if(type) document.body.className = `${type}`;

  return (
    <Fragment>
        <Search />
        <Section title="Buscar por tipo de alojamiento" type="Category" />
        <Section title="Recomendaciones" type="Card" />
    </Fragment>
  )
}

export default Home;