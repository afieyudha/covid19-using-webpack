import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'normalize.css';
import '../containers/app.scss';
import '../component/app-bar.js';

import Header from '../component/header.jsx';
import CounterPage from './counterPage.jsx';
import RankPage from './rankPage.jsx';
import ChartPage from './chartPage.jsx';
import AboutPage from './aboutPage.jsx';
import NotFoundPage from './notFoundPage.jsx';
import NavBar from '../component/navBar.jsx';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />

        <Switch>
          <Route exact path="/">
            <CounterPage />
          </Route>

          <Route path="/rank">
            <RankPage />
          </Route>

          <Route path="/chart">
            <ChartPage />
          </Route>

          <Route path="/about">
            <AboutPage />
          </Route>

          <Route exact path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
