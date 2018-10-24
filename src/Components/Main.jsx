import React from 'react';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className="main-page">
      <div className="main-page-title">
        <Typography>
          <h1>Jazz Saxophonist/Teacher/Composer</h1>
        </Typography>
        <Grid container direction="row">
          <Grid item className="main-page-transcription">
            <div className="main-page-transcription-preview">
              Image here
            </div>
            <div className="main-page-transcription-description">
              <Link to='/transcriptions'>Check out some of the solo transcriptions i've done, 
              or ask about my transcription services.</Link>
            </div>
          </Grid>
          <Grid item className="main-page-music">
            <div className="main-page-music-preview">
              Youtube video here
            </div>
            <div className="main-page-music-description">
              <Link to='/music'>Performance videos and clips</Link>
            </div>
          </Grid>
          <Grid item className="main-page-bio">
            <div className="main-page-bio-pic">
              Picture here!
            </div>
            <div className="main-page-bio-text">
              <Link to='/biography'>Learn more about Michael</Link>
            </div>
          </Grid>
        </Grid>
        <div className="main-page-services">
          <Link to='/services'>Interested in performances, lessons, or masterclasses?</Link> 
        </div>
      </div>
    </div>
  );
}

export default Main; 