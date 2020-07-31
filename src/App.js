import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';
import Category from './pages/login/Category';
import Videos from './pages/login/Video';
import Actor from './components/Actor';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/videos" component={Videos} />
        <Route path="/category" component={Category} />
        <Route path="/actor" component={Actor} />
        <Route component={() => <div style={{ color: 'white' }}>404</div>} />
      </Switch>
    </Router>
  );
}

export default App;
