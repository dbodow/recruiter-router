import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

<<<<<<< HEAD
import GreetingContainer from
  './greeting/greeting_container';
import SessionFormContainer from
  './session_form/session_form_container';
import PortfolioBuilderContainer from
  './portfolio_builder/portfolio_builder_container';
import LinksManagerContainer from
  './links_manager/links_manager_container';
import NavBar from
  './navbar/navbar';
=======
import GreetingContainer from "./greeting/greeting_container";
import SessionFormContainer from "./session_form/session_form_container";
import PortfolioBuilderContainer from "./portfolio_builder/portfolio_builder_container";
import PortfolioManagerContainer from "./portfolio_manager/portfolio_manager_container";
import NavBar from "./navbar/navbar";
>>>>>>> master
import {
  AuthRoute,
  ProtectedRoute,
  ProtectedExactRoute
} from "../util/route_util";

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
<<<<<<< HEAD
      <ProtectedRoute path="/links" component={LinksManagerContainer} />
=======
      <ProtectedRoute path="/analytics" component={PortfolioManagerContainer} />
>>>>>>> master
    </Switch>
    <footer>
      <div className="max-width footer">
        <p>Site by Adeel Ahmad, Alvin James Delos Santos, and David Bodow.</p>
        <p>
          Portfolio templates modified from original versions at{" "}
          <a href="http://www.templatemo.com/">Templatemo</a>.
        </p>
      </div>
    </footer>
  </div>
);

export default App;
