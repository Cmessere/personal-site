import React from 'react';
import photo from "./Images/prova.jpg";

import './App.css';
import './Animation.scss';

function App() {
  return (
    <div className="body">
      <div className="background">
        <div className="App">
        <Header></Header>
        <div className="main-page-column">
          <div className="photo-div">
            <img className="portrait" src={photo} alt="photo" />
          </div>
          <div className="main-div">
            <h1 className="name">Carlo Messere <h1 className="profession">Software Developer</h1> </h1>
          </div>
        </div>
      <div className="main-page-column">
        <div className="footer">
          <h1 className="content">"I make stuff"</h1>
        </div>
        </div>
      </div>
        <Particles/>
      </div>
    </div>
  );
}

const Particles = () => {
  const lowerParticles = Array.apply(null, Array(66));
  const upperParticles = Array.apply(null, Array(700));

  return(
    <div className="Particles">
      {
        upperParticles.map(() => {return <span className= "upper-particles"></span>})
      }
      {
        lowerParticles.map(() => {return <span className= "lower-particles"></span>})
      }
    </div>
  )
}

const Header = () => {
  return(
    <div className="App-header"> 
      <div className="header-content">ABOUT</div>
      <div className="header-content">BLOG</div>
      <div className="header-content">CONTACT</div>
    </div>
  )
}

export default App;
