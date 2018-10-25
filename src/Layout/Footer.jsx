import React from 'react';
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import instagram from '../assets/if_instagram_313477.svg'
import soundcloud from '../assets/if_soundcloud_313470.svg'
import linkedin from '../assets/if_linkedin_313475.svg'
import '../styles/footer.css'

function TopBar() {
  return (
    <footer className="footer" style={{backgroundColor: "#242628", position: "static",
    bottom: "0", width: "100%"}}>
      <Grid container className="footer-grid" direction="row">
        <Grid item className="footer-grid-left">
          <Grid container className="footer-grid-icons">
            <Grid item className="footer-grid-icons-items">
              <a href="https://www.instagram.com/michaeljazz2/?hl=en" target="_blank" rel="nonoreferrer noopener">
                <img src={instagram} alt="instagram"/>
              </a>
            </Grid>
            <Grid item className="footer-grid-icons-items">
              <a href="https://soundcloud.com/" target="_blank" rel="nonoreferrer noopener">
                <img src={soundcloud} alt="soundcloud"/>
              </a>
            </Grid>
            <Grid item className="footer-grid-icons-items">
              <a href="https://www.linkedin.com/in/michael-anderson-60847b165/" target="_blank" rel="nonoreferrer noopener">
                <img src={linkedin} alt="linkedin"/>
              </a>
            </Grid>  
          </Grid>
        </Grid>
        <Grid item className="footer-grid-right">
          <div className="footer-grid-information">
            <Link to="/"><Button variant="outlined">Home</Button></Link>
            <div className="footer-credits">
              <p>Icons courtesy of <a href="https://www.iconfinder.com/laurareen">Laura Reen</a></p>
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}

export default TopBar; 