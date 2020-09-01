import React from 'react';
import photo from "./Images/mgs23.jpg";

import './App.css';

function App() {


  return (
    <div className="body">
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
      </div>
      <div className="main-page-column">
        <div className="footer">
          <h1 className="content">I make stuff</h1>
        </div>
      </div>
    </div>
  );
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
