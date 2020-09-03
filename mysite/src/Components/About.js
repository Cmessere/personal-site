import React from 'react';
import './About.css';
import prova from './images/prova.jpg';

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-row">
        <h1 className="about-title">Hi I am Carlo, Welcome to my site!</h1>
      </div>
      <div className="about-row">
        <div className="about-column">
          <img className="about-portrait" src={prova} alt="portrait">
          </img>
        </div>
        <div className="about-column">
          <p className="about-sideparagraph">
            I've always wanted to work in the gaming industry, but I could not decide wether
            as an artist, a designer or even as a voice actor!
            One day when I was 14 I picked up an old copy of Deitel's "C How to program" and instantly 
            fell in love with coding. Soon later I moved to C++, my favourite programming language to date.
          </p>
        </div>
        </div>
      <div className="about-row">
        <p className="about-paragraph">
          After highscool I started University and opted for Computer Engineering, 
          because I liked the idea of an extensive Math and Physics background.
          Through classes I learned a variety of programming concepts, languages and techniques,
          and how to apply them in different contexts.
          All the while in my free time I started tinkering more with engines and libraries,
          developing simple games as a hobby.
        </p>
      </div>
      </div>
  );
};
