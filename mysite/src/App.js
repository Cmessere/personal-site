import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
    </div>
  );
}

const Header = () => {
  return(
    <div className="App-header"> 
      <div className="header-content">ABOUT</div>
      <div className="header-content">WORK</div>
      <div className="header-content">BLOG</div>
      <div className="header-content">CONTACT</div>
    </div>
  )
}

export default App;
