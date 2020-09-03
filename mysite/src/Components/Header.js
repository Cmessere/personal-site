import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
export const Header = () => {

  let history = useHistory();

  function changePage(path) {
    history.push(`/${path}`);
  }

  return (
    <div className="App-header">
      <div className="App-header-row">
        <div className="header-content" onClick={() => changePage("")}>HOME</div>
        <div className="header-content" onClick={() => changePage("about")}>ABOUT</div>
        <div className="header-content" onClick={() => changePage("links")}>LINKS</div>
      </div>
      <div className="App-header-row">
      <div className="contact-row">
        <a className="custom-link" href="https://www.linkedin.com/in/carlo-messere-65a193115/" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
        </a>
        <a className="custom-link" href="https://www.github.com/shiro23/" rel="noopener noreferrer" target="_blank">
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
