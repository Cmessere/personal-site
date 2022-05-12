import React from 'react';
import './App.css';
import './ParticlesAnimation.scss';
import { Main } from './Main';
import { Links } from './Links';
import { About } from './About';
import { Works } from './Works';
import { Particles } from './Particles';
import { Header } from './Header';

function App() {
  return(
    <div className="body">
      <div className="background">
        <div className="App">
          <Header></Header>
            <Main />
            <About />
            <Works />
            <Links />
            <Particles />
        </div>
      </div>
    </div>
  )
}

export default App;
