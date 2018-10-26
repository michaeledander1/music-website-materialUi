import React from 'react';
import Typography from "@material-ui/core/Typography"
import Calendar from './Calendar'
import '../styles/calendar.css'

function Gigs() {
  return (
    <div className="gigs-page">
      <div className="gigs-page-title">
        <Typography>
          <h1>Gigs</h1>
        </Typography>
        <div className="gigs-page-calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default Gigs; 