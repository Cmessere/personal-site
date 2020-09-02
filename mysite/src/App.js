import React from 'react';

import './App.css';
import './Animation.scss';
import { Switch, Route } from 'react-router';
import { Main } from './Main';
import { Contact } from './Contact';
import { Blog } from './Blog';
import { About } from './About';

function App() {
  return(
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  )
}

export default App;
