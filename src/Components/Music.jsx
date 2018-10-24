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
            <iframe width="425" height="240" src="https://www.youtube.com/embed/drkSfniKT_E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <Typography>
              <p>Performing with the New Arrangments Nonet in Amsterdam</p>
            </Typography>
          </Grid>
          <Grid item className="music-page-video-item">
            <iframe width="425" height="240" src="https://www.youtube.com/embed/XzGPLYxYNvs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <Typography>
              <p>Performing with the New Arrangments Nonet at the Bimhuis in Amsterdam</p>
            </Typography>
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