import React from "react";
import "./Main.css";
import { useHistory } from 'react-router';

export const Main = () => {
  let history = useHistory()
  return (
    <div className="main-page" onClick={() => history.push("/home")}>
        <div className="portrait">
          <div className="inner-portrait">
            <div className="title">
              <p className="name">START</p>
            </div>
          </div>
        </div>
    </div>
  );
};
