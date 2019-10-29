/* jshint ignore:start */
import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import TeatPage from './components/TestPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Link to="/testPage">test routing</Link> <br/>
      <Link to="/">Login Page</Link>

        <Switch>
          <Route path="/testPage">
            <TeatPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>  
    </BrowserRouter>
  );
}

export default App;
/* jshint ignore:end */
