import React from 'react';
import './Main.css';
import { useHistory } from 'react-router';

export const Main = () => {
  let history = useHistory()
  return (
          <div className="main-page">
                <div className="portrait" onClick={()=>history.push("/about")}>
                  <div className="inner-portrait">
                    <div className="title">
                      <p className="name"> Carlo Messere</p>
                      <p className="work"> Software Developer</p>
                    </div>
                  </div>
              </div>
          </div>
  );
};
