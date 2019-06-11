import React from 'react';

function Nav({ matches, attempts }) {
  return (

    /*     <div className="navbar-fixed">
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
        </div> */

    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <ul className="Left">
            <li><h4 id="brand-logo">MatchCard</h4></li>
          </ul>
          <div className="nav-content">
            <div className="row">
              <div className="col s6 offset-s3">
                <span className="scoreBoard">Matches = {matches}</span>
                <span className="scoreBoard">Tries Remaining = {attempts}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Nav;