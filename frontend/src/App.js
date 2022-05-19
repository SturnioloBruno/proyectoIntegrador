import React, {Fragment} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/cards/Card';
import Footer from './components/Footer';
import Section from './components/Section';

function App() {
  return (
    <Fragment>
      <Header />
      <Search />

      <Section title="Buscar por tipo de alojamiento" />
      <section>
        <h2>Recomendaciones</h2>
        <ul>
          <li><Card title="Hermitage Hotel" /></li>
          <li><Card title="Hermitage Hotel" /></li>
        </ul>
      </section>

      <Footer />
    </Fragment>
  )
}

export default App;