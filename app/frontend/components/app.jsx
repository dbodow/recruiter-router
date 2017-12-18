import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from
  './greeting/greeting_container';
import SessionFormContainer from
  './session_form/session_form_container';
import PortfolioBuilderContainer from
  './portfolio_builder/portfolio_builder_container';
import { LinksManager } from
  './links_manager/links_manager';
import NavBar from
  './navbar/navbar';
import {
  AuthRoute,
  ProtectedRoute,
  ProtectedExactRoute
} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <div className="max-width heading">
        <Link to="/" className="header-link">
          <h1>RecruiterRouter</h1>
        </Link>
        <NavBar />
        <GreetingContainer />
      </div>
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/register" component={SessionFormContainer} />
      <ProtectedRoute path="/builder" component={PortfolioBuilderContainer} />
      <ProtectedRoute path="/links" component={LinksManager} />
    </Switch>
    <footer>
      <div className="max-width footer">
        <p>Site by Adeel Ahmad, Alvin James Delos Santos, and David Bodow.</p>
        <p>Portfolio templates modified from original versions at <a href="http://www.templatemo.com/">Templatemo</a>.</p>
      </div>
    </footer>
  </div>
);

export default App;
