import React from 'react';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import instagram from '../assets/if_instagram_313477.svg'
import soundcloud from '../assets/if_soundcloud_313470.svg'
import linkedin from '../assets/if_linkedin_313475.svg'
import '../styles/services.css'

function Services() {
  return (
    <div className="services-page">
      <Grid container direction="row" className="services-page-layout">
        <Grid item className="services-gigs">
          <Typography>
            <h2>Contact</h2>
            <h3>Email</h3>
            <p>michaeledander1@gmail.com</p>
          </Typography>
        </Grid>
          <Grid item className="services-page-social">
            <Typography>
              <h2>Social Media</h2>
            </Typography>
            <Grid container direction="row">
              <Grid item className="services-page-social-item">
                <a href="https://www.instagram.com/michaeljazz2/?hl=en" target="_blank" rel="nonoreferrer noopener">
                  <img src={instagram} alt="instagram"/>
                </a>  
              </Grid>
              <Grid item className="services-page-social-item">
                <a href="https://soundcloud.com/" target="_blank" rel="nonoreferrer noopener">
                  <img src={soundcloud} alt="soundcloud"/>
                </a> 
              </Grid>
              <Grid item className="services-page-social-item">
                <a href="https://www.linkedin.com/in/michael-anderson-60847b165/" target="_blank" rel="nonoreferrer noopener">
                  <img src={linkedin} alt="linkedin"/>
                </a>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    </div>
  );
}

export default Services; 