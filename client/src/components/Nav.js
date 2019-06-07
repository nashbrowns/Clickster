import React from 'react';

function Nav({ matches, attempts }) {
  return (

    <nav className="nav-extended cyan lighten-4">
      <div className="nav-wrapper">
        <ul className="blue-grey-text left">
          <li className="brand-logo">MatchCard</li>
        </ul>
      </div>
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
         <li className="tab"></li> 
         <li className="tab"><a>Matches = {matches}</a></li> 
         <li className="tab"><a>Attempts = {attempts}</a></li> 
        </ul>
      </div>
    </nav> 

  );
}

export default Nav;