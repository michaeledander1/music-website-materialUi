import React from 'react';
import Typography from "@material-ui/core/Typography"
import Calendar from './Calendar'
import '../styles/calendar.css'

function Gigs() {
  return (
    <div className="gigs-page">
      <div className="gigs-page-title">
        <Typography style={{textAlign: "center", marginTop: "5%"}}>
          <h1>Gigs</h1>
        </Typography>
        <div className="gigs-page-calendar">
          <Calendar />
        </div>
        <Typography style={{textAlign: "center", marginTop: "3%"}}>
          <h2>Check back often for updates to the calendar</h2>
        </Typography>
      </div>
    </div>
  );
}

export default Gigs; 