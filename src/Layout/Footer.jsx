import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Button from '@material-ui/core/Button';

function TopBar() {
  return (
    <BottomNavigation style={{backgroundColor: "#242628"} } className="footer">
      <div className="footer-social">
        Instagram
      </div>
      <div className="footer-top-button">
        <Button variant="outlined">To Top</Button>
      </div>
    </BottomNavigation>
  );
}

export default TopBar; 