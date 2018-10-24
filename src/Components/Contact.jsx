import React from 'react';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-page-title">
        <Typography>
          <h1>Contact</h1>
        </Typography>
        <Grid container direction="row">
          <Grid item className="contact-page-details-item">
            Video of me
          </Grid>
          <Grid item className="contact-page-social-item">
            Another video of me
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Contact; 