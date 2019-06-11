import React from 'react';

function Nav({ matches, attempts }) {
  return (

    <div className="navbar-fixed">
      <nav className="nav-extended red accent-2">
        <div className="nav-wrapper">
          <ul>
            <li><span className="brand-logo">MatchCard</span></li>
          </ul>
        </div>
        <div className="nav-content">
          <ul>
            <li><h6>Matches = {matches}</h6></li>
            <li><h6>Tries = {attempts}</h6></li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Nav;