import React from 'react';
import './App.css';
import './Animation.scss';
import { Switch, Route } from 'react-router';
import { Main } from './Main';
import { Links } from './Links';
import { About } from './About';
import { Particles } from './Particles';
import { Header } from './Header';

function App() {
  return(
    <div className="body">
      <div className="background">
        <div className="App">
          <Header></Header>
          <Particles />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/links">
              <Links />
            </Route>
        </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;
