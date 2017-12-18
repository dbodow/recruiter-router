import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav className='header-nav-links inner-max-width'>
    <NavLink to="/builder" className="header-link">
      Build Portfolio
    </NavLink>
    <NavLink to="/links" className="header-link">
      Manage Links
    </NavLink>
    <NavLink to="/manage-recruiters" className="header-link">
      Manage Recruiters
    </NavLink>
    <NavLink to="/analytics" className="header-link">
      Analytics
    </NavLink>
  </nav>
);
