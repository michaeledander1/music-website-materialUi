import React from 'react';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

function Music() {
  return (
    <div className="music-page">
      <div className="music-page-title">
        <Typography>
          <h1>Music</h1>
        </Typography>
        <Grid container direction="row">
          <Grid item className="music-page-video-item">
            Video of me
          </Grid>
          <Grid item className="music-page-video-item">
            Another video of me
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item className="music-page-music-item">
            Music example
          </Grid>
          <Grid item className="music-page-music-item">
            Music example
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Music; 