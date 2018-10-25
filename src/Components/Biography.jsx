import React from 'react';
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import '../styles/biography.css'
import standingPic from '../assets/standing-pic.jpg'

function Biography() {
  return (
    <div className="bio-page">
      <div className="bio-page-title">
        <Typography style={{textAlign: "center", marginBottom: "5%", fontSize: "1.5em"}}>
          <h1>Michael Anderson</h1>
        </Typography>
        <Grid container direction="row">
          <Grid item className="bio-page-image">
            <img src={standingPic} alt="Michael Anderson"/>
          </Grid>
          <Grid item className="bio-page-text">
            <Typography>
              <h2>About</h2>
              <p>
                Michael Anderson was born in Champaign, Illinois, south of Chicago.
                After starting clarinet at the age of 12, he discovered saxophonists John Coltrane and 
                Charlie Parker and he started tenor saxophone at the age of 13.
              </p>
              <p>
                During highschool, Michael twice had the oppurtunity to perform at the prestigious Essentially Ellington festival
                at Lincoln Center in New York City. For his solo performances with his school big bands he was awarded
                soloist awards by Wynton Marsalis both in 2004 and 2008. During these events he also
                met his Victor Goines, who Michael would later study with extensivley.
              </p>
              <p>
                Michael attended Northwestern University for jazz studies on a scholarship, graduating with honors in 2012.
                During his time there, Michael performed at the best jazz clubs in Chicago, including the 
                Jazz Showcase, Andy's, and the Green Mill. He was also selected to represent the school at the 
                New Orleans Jazz and Hertiage festival and at to perform at Dizzy's Jazz Club Coca-Cola in New York City. 
              </p>
              <p>
                After working as a musician in the Chicago and central Illinois areas, Michael moved to Amsterdam to
                pursue his Master's degree, which he earned in 2018. While residing in the Netherlands, Michael has
                performed at some of the premier jazz clubs in the country, in cities including Amsterdam, Rotterdam, 
                the Hague, Arnhem, Leiden, as well as tours to Hamburg, Germany and Vilinius, Lithuania. In 2018 Michael also 
                performed in the finals of the Dutch jazz competetion as part of the Laurie Carpenter Quintet.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Biography; 