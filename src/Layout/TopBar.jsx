import React from 'react';
import AppBar from '@material-ui/core/AppBar';

function TopBar() {
  return (
    <AppBar style={{backgroundColor: "#242628"}}>
      <div className="header-name">
        Michael Anderson
      </div>
      <div className="header-navigation">
        <div className="header-navigation-links">
          About
          Music
          Transcriptions
          Gigs
          Contact
        </div>
      </div>
    </AppBar>
  );
}

export default TopBar; 