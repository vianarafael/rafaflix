import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';
import Category from './pages/login/Category';
import Signin from './pages/login/signin';
import Actor from './components/Actor';
import { auth } from './firebase/firebase.utils';
import PageDefault from './components/pageDefault';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      return () => {
        unsubscribeFromAuth();
      };
    });
  });
  return (
    <Router>
      <PageDefault currentUser={currentUser}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/signin" component={Signin} />
          <Route path="/category" component={Category} />
          <Route path="/actor" component={Actor} />
          <Route component={() => <div style={{ color: 'white' }}>404</div>} />
        </Switch>
      </PageDefault>
    </Router>
  );
}

export default App;
