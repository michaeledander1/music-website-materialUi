import React from 'react';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

function Gigs() {
  return (
    <div className="gigs-page">
      <div className="gigs-page-title">
        <Typography>
          <h1>Gigs</h1>
        </Typography>
        <Grid container direction="row">
          <Grid item className="gigs-page-video-item">
            Video of me
          </Grid>
          <Grid item className="gigs-page-video-item">
            Another video of me
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item className="gigs-page-gigs-item">
            Gigs example
          </Grid>
          <Grid item className="gigs-page-gigs-item">
            Gigs example
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Gigs; 