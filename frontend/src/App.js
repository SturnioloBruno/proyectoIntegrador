import React, {Fragment} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import Section from './components/Section';

function App() {
  return (
    <Fragment>
      <Header />
      <Search />

      <Section title="Buscar por tipo de alojamiento" type="Category" />
      <Section title="Recomendaciones" type="Card" />

      <Footer />
    </Fragment>
  )
}

export default App;