import React from 'react';
import { useHistory } from 'react-router';
export const Header = () => {

  let history = useHistory();

  function changePage(path) {
    history.push(`/${path}`);
  }

  return (
    <div className="App-header">
      <div className="header-content" onClick={() => changePage("")}>HOME</div>
      <div className="header-content" onClick={() => changePage("about")}>ABOUT</div>
      <div className="header-content" onClick={() => changePage("blog")}>BLOG</div>
      <div className="header-content" onClick={() => changePage("contact")}>CONTACT</div>
    </div>
  );
};
