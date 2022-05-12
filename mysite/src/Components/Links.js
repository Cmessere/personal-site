import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGooglePlay,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import "./Links.css";
import "./LinksAnimation.scss";

export const Links = () => {
  return (
    <div className="link-page">
      <div className="link-row">
        <div className="link-component">
          <div className="contact-bubble">
            <div className="inner-contact-bubble">
              <a
                className="bubble-link"
                href="https://drive.google.com/file/d/12jz3CIT_Fhz06kGBCfuKwmKPevDzA_Nq/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="bubble-icon-height" icon={faFile} />
              </a>
            </div>
          </div>
          <h1 className="contact-name">My CV</h1>
        </div>
        <div className="link-component">
          <h1 className="contact-name">Apps</h1>
          <div className="contact-bubble">
            <div className="inner-contact-bubble">
              <a
                className="bubble-link"
                href="https://github.com/Cesarsk-Dev-Team"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="bubble-icon" icon={faGooglePlay} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="link-row">
        <div className="link-component">
          <div className="contact-bubble">
            <div className="inner-contact-bubble">
              <a
                className="bubble-link"
                href="https://www.linkedin.com/in/carlo-messere-65a193115/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="bubble-icon" icon={faLinkedin} />
              </a>
            </div>
          </div>
          <h1 className="contact-name">Linkedin</h1>
        </div>
        <div className="link-component">
          <h1 className="contact-name">GitHub</h1>
          <div className="contact-bubble">
            <div className="inner-contact-bubble">
              <a
                className="bubble-link"
                href="https://www.github.com/cmessere/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="bubble-icon" icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="link-row">
        <div className="link-component">
          <div className="contact-bubble">
            <div className="inner-contact-bubble">
              <a
                className="bubble-link"
                href="https://www.github.com/cmessere/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon className="bubble-icon" icon={faHackerrank} />
              </a>
            </div>
          </div>
          <h1 className="contact-name">Hacker Rank</h1>
        </div>
        <div className="link-component">
          <h1 className="contact-name">Email Me</h1>
          <div className="contact-bubble">
            <div className="inner-contact-bubble">
              <a
                className="bubble-link"
                href="mailto: messerecarlo27@gmail.com"
              >
                <FontAwesomeIcon className="bubble-icon" icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
