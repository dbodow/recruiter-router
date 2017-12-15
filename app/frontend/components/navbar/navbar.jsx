import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className='header-nav-links inner-max-width'>
    <Link to="/builder" className="header-link">
      Build Portfolio
    </Link>
    <Link to="/manage-recruiters" className="header-link">
      Manage Recruiters
    </Link>
    <Link to="/analytics" className="header-link">
      Analytics
    </Link>
  </nav>
);
