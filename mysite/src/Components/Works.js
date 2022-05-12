import React from 'react';
import { Link } from "react-scroll";

export const Works = () => {

  return (
    <div className="works-page">
      <p className="works-paragraph">
        While attending University I kept busy with multiple activities.
        Most notably, I delved in game development publishing <a className='works-link' href="https://github.com/Cesarsk-Dev-Team" rel="noopener noreferrer" target="_blank">four mobile games</a> made with <b>Unity</b> on the PlayStore, and created a game engine from scratch with C++ and SDL.
        <br></br>
        All the while I enjoyed participating in competitive <a className='works-link' href="https://www.hackerrank.com/Shiro27" rel="noopener noreferrer" target="_blank">online coding challenges</a> and deepened my knowledge with Data Structures and popular Algorithms.
      </p>
      <p className="works-paragraph">
        As a professional developer, I started as a C# backend developer and later moved on to frontend development, specifically with Javascript, Typescipt and React.js.
      </p>
      <p className="works-paragraph">
        I have developed a <a className='works-link' href="https://www.iconsulting.biz/en/oscar/" rel="noopener noreferrer" target="_blank">product</a> for my former company and worked with some of Italy's biggest companies like Pirelli, Unipol and Generali, developing custom tailored Single Page Applications and Websites with great results.
      </p>
      <p className="works-paragraph">
        Currently I am working as a consultant on Phillip Morris International's IQOS website.
      </p>
      <Link
        activeClass="active"
        to="link-page"
        spy={true}
        smooth={true}
        duration={1000}
      >
      <p className="works-paragraph-last">
        Click here if you want to get in contact!
      </p>
      </Link>
    </div>
  );
};
