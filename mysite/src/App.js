import React from 'react';
import CodeLogo from "./Images/code_logo.svg";
import GamepadLogo from "./Images/gamepad_logo.svg";
import PuzzleLogo from "./Images/puzzle_logo.svg";
import photo from "./Images/mgs23.jpg";

import './App.css';

function App() {

  const logoCarousel = [CodeLogo, GamepadLogo, PuzzleLogo]

  const [currentImage, setCurrentImage] = React.useState(0);
  React.useEffect(()=>{
    const interval = setInterval(switchImage, 4000);
    return () => clearInterval(interval);
  })

  function switchImage() {
    if (currentImage < logoCarousel.length - 1) 
      setCurrentImage(currentImage+1)
    else
      setCurrentImage(0)
  }


  return (
    <>
    <Header></Header>
    <div className="App">
      <div className="home-logo-div">
        <img className="Logo-div" src={logoCarousel[currentImage]} alt="Logo" />
      </div>
      <div className="photo-div">
        <img className="portrait" src={photo} alt="photo" />
      </div>
      <div className="main-div">
        <h1 className="name">Carlo Messere <h1 className="profession">Software Developer</h1> </h1>
      </div>
    </div>
    <div className="footer">
      <h1 className="content">I make stuff</h1>
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
