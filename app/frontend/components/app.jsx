import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <div className="max-width">
        <Link to="/" className="header-link">
          <h1>RecruiterRouter</h1>
        </Link>
        <GreetingContainer />
      </div>
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/register" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
