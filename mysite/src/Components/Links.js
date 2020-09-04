import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Links.css"

export const Links = () => {
  return (
    <div className="Link-page">
      <h1>Here you can find all the way to get in touch with me</h1>
      <div className="contact">
        <div className="contact-bubble">
          <div className="inner-contact-bubble">
            <a className="bubble-link" href="https://www.linkedin.com/in/carlo-messere-65a193115/" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon className="bubble-icon" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
