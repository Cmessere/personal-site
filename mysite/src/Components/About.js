import React from 'react';
import './About.css';
import './AboutAnimation.scss';
import photo from './images/photo.png';

export const About = () => {

  return (
    <div className="about-page">
      <img className="curve" src={photo} alt="curve"></img>
      <h1 className="about-title">Hey There, Welcome to my site!</h1>
      <p className="paragraph">
        My Name is Carlo Messere, and I am a software developer.
      </p>
      <p className="paragraph">
        One day when I was 14 I picked up an old copy of Deitel's "C How to program" and instantly
        fell in love with it.
      </p>
      <p className="paragraph">
        Coding became my passion, and I soon decided to make it a profession. I got my Master's in Computer Engineering that gave me a structured approach and the forma mentis to work as an engineer.
              </p>
      <p className="paragraph">
        All the while I kept busy tinkering with different languages and technologies.
        To this day I have good experience with multiple programming languages, spacing from the "Old reliables" like C/C++, to the scripting oriented like Javascript, Python and Rust.
      </p>
      <p className="paragraph">
        I live and breathe technologies, and I always love to learn!
      </p>
    </div>
  );
};
