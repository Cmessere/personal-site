import React from 'react';
import photo from "./Images/prova.jpg";
import { Header } from './Header';
import { Particles } from './Particles';
export const Main = () => {
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
        <Particles />
      </div>
    </div>
  );
};
