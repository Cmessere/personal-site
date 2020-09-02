import React from 'react';
import photo from "./Images/prova.jpg";

import './App.css';
import './Animation.scss';
import { Switch, Route } from 'react-router';
import { Header } from './Header';
import { Particles } from './Particles';

function App() {
  return(
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  )
}

const About = () =>{
  return(
    <div className="body">
      <div className="background">
        <div className="App">
        <Header></Header>

        <Particles/>
        </div>
      </div>
    </div>
  )
}


const Blog = () =>{
  return(
    <div className="body">
      <div className="background">
        <div className="App">
        <Header></Header>

        <Particles/>
        </div>
      </div>
    </div>
  )
}

const Contact = () =>{
  return(
    <div className="body">
      <div className="background">
        <div className="App">
        <Header></Header>

        <Particles/>
        </div>
      </div>
    </div>
  )
}

const Main = () => {
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

export default App;
