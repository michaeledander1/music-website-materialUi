import React from 'react';
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';

function TopBar() {
  return (
    <footer className="footer" style={{backgroundColor: "#242628", position: "fixed",
    bottom: "0", width: "100%"}}>
      <Typography variant="h6" align="center" gutterBottom>
        Instagram
      </Typography>
      <Button variant="outlined">To Top</Button>
    </footer>
  );
}

export default TopBar; 