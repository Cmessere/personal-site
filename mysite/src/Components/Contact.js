import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Contact.css"

export const Contact = () => {
  return (
    <div className="contact-page">

      <div className="contact-row">
        <a className="custom-link" href="https://www.linkedin.com/in/carlo-messere-65a193115/" target="_blank">
          <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
          <h1 className="link-paragraph">My Linkedin Account</h1>  
        </a>
      </div>
      <div className="contact-row">
        <a className="custom-link" href="https://www.github.com/shiro23/" target="_blank">
          <FontAwesomeIcon className="contact-icon" icon={faGithub} />
          <h1 className="link-paragraph">My Github</h1>  
        </a>
      </div>
      <div className="contact-row">
        <a className="custom-link" href="mailto: messerecarlo27@gmail.com" >
          <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
          <h1 className="link-paragraph">If you want to @ me!</h1>  
        </a>
      </div>
    </div>
  );
};
