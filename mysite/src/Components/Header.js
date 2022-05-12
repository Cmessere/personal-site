import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";

import "./Header.css"
export const Header = () => {


  return (
    <div className="App-header">
      <div className="App-header-row">
        <Link
          activeClass="active"
          to="about-page"
          spy={true}
          smooth={true}
          duration={1000}
        >
        <div className="header-content" >About</div>
        </Link>
        <Link
          activeClass="active"
          to="works-page"
          spy={true}
          smooth={true}
          duration={1000}
        >
        <div className="header-content" >Works</div>
        </Link>
        <Link
          activeClass="active"
          to="link-page"
          spy={true}
          smooth={true}
          duration={1000}
        >
        <div className="header-content" >Links</div>
        </Link>

      </div>
      <div className="App-header-row">
      <div className="contact-row">
        <a className="custom-link" href="https://www.linkedin.com/in/carlo-messere-65a193115/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
        </a>
        <a className="custom-link" href="https://www.github.com/cmessere/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="contact-icon" icon={faGithub} />
        </a>
        <a className="custom-link" href="mailto: messerecarlo27@gmail.com" >
          <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
        </a>
      </div>
      </div>
    </div>
  );
};
