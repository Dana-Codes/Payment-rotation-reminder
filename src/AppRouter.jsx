import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Sweeper from './pages/Sweeper';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sweeper" component={Sweeper} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
