import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom'

function TopBar() {
  return (
    <AppBar position="fixed" style={{backgroundColor: "#242628"}}>
      <div className="header-name">
        Michael Anderson
      </div>
      <div className="header-navigation">
        <div className="header-navigation-links">
          <Link to='/biography'>About</Link>
          <Link to='/music'>Music</Link>
          <Link to='/transcriptions'>Transcriptions</Link>
          <Link to='/gigs'>Gigs</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </AppBar>
  );
}

export default TopBar; 