import React from 'react';
import './Main.css';

export const Main = () => {
  return (
          <div className="main-page">
                <div className="portrait" onClick={()=> console.log("yo")}>
                  <div className="inner-portrait">
                    <div className="title">
                      <p className="name"> START</p>
                    </div>
                  </div>
              </div>
          </div>
  );
};
