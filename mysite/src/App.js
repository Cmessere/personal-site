import React from 'react';
import photo from "./Images/prova.jpg";

import './App.css';
import './Animation.scss';
import { Switch, Route, useHistory } from 'react-router';

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

  let history = useHistory();

  function changePage(path){
    history.push(`/${path}`)
  }

  return(
    <div className="App-header"> 
      <div className="header-content" onClick={() => changePage("")}>HOME</div>
      <div className="header-content" onClick={() => changePage("about")}>ABOUT</div>
      <div className="header-content" onClick={() => changePage("blog")}>BLOG</div>
      <div className="header-content" onClick={() => changePage("contact")}>CONTACT</div>
    </div>
  )
}

export default App;
