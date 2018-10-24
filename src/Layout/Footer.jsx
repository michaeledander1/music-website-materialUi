import React from 'react';
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';
import instagram from '../assets/if_instagram_313477.svg'
import soundcloud from '../assets/if_soundcloud_313470.svg'
import linkedin from '../assets/if_linkedin_313475.svg'
import '../styles/footer.css'

function TopBar() {
  return (
    <footer className="footer" style={{backgroundColor: "#242628", position: "fixed",
    bottom: "0", width: "100%"}}>
      <a href="https://www.instagram.com/michaeljazz2/?hl=en" target="_blank" rel="nonoreferrer noopener">
        <img src={instagram} alt="instagram"/>
      </a>
      <a href="https://soundcloud.com/" target="_blank" rel="nonoreferrer noopener">
        <img src={soundcloud} alt="soundcloud"/>
      </a>
      <a href="https://www.linkedin.com/in/michael-anderson-60847b165/" target="_blank" rel="nonoreferrer noopener">
        <img src={linkedin} alt="linkedin"/>
      </a>
      <Button variant="outlined">To Top</Button>
      <div className="footer-credits">
        <p>Icons courtesy of <a href="https://www.iconfinder.com/laurareen">Laura Reen</a></p>
      </div>
    </footer>
  );
}

export default TopBar; 