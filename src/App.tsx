import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Legendaries } from './components/Legendaries/Legendaries';
import { MainScreen } from './components/Main';
import { PokeContext } from './components/PokeContext';
import { PokedexScreen } from './components/Pokedex';
import { Wrapper } from './components/Wrapper';
import { GlobalStyle } from './styles/global';



function App() {
  return (
    <>
    <PokeContext>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/pokedex" element={<PokedexScreen />} />
          <Route path="/legendaries" element={<Legendaries />} />
        </Routes>
        <Footer />
      </Wrapper>
      </PokeContext>
    </>
  );

}

export default App;
