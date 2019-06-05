import React from 'react';

function Nav() {
    return (
        <nav className="cyan lighten-4">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center blue-grey-text">Clickster</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Nav;