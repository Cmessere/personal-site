import React from 'react';
import CodeLogo from "./Images/code_logo.png";
import GamepadLogo from "./Images/gamepad_logo.png";
import PuzzleLog from "./Images/puzzle_logo.png";


import './App.css';

function App() {
  return (
    <>
    <Header></Header>
    <div className="App">
        <image image={CodeLogo}></image>
    </div>
    </>
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
