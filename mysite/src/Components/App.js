import React from 'react';
import './App.css';
import './ParticlesAnimation.scss';
import { Links } from './Links';
import { About } from './About';
import { Works } from './Works';
import { Header } from './Header';
import { Particles } from './Particles';


function App() {
  return(
    <div className="body">
      <div className="background">
        <div className="App">
            <Header />
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
