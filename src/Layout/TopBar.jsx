import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom'
import '../styles/header.css'

function TopBar() {
  return (
    <AppBar position="static" style={{backgroundColor: "#242628"}}>
      <div className="header">
        <div className="header-name">
          <h1>Michael Anderson</h1>
        </div>
        <div className="header-navigation">
          <Link to='/biography'><p>About</p></Link>
          <Link to='/music'><p>Music</p></Link>
          <Link to='/transcriptions'><p>Transcriptions</p></Link>
          <Link to='/gigs'><p>Gigs</p></Link>
          <Link to='/contact'><p>Contact</p></Link>
        </div>
      </div>
    </AppBar>
  );
}

export default TopBar; 