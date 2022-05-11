import React from "react";
import "./Main.css";
import { Link } from "react-scroll";

export const Main = () => {
  return (
    <div className="main-page">
      <Link
        activeClass="active"
        to="about-page"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div className="portrait">
          <div className="inner-portrait">
            <div className="title">
              <p className="name">START</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
