import React from "react";
// import AltTimeline from "./timeline";
import HiFiTimeline from "./hifitimeline";

function Events() {
  return(
  <div>
    <div class="d-flex justify-content-center p-5 bg-warning"><h1>Upcoming Events</h1></div>
    {/* <AltTimeline /> */}
    <HiFiTimeline />
    <div class="d-flex justify-content-center p-5 bg-warning">
      <h1>More Events</h1>
    </div>
    <div class="d-flex justify-content-center p-4 bg-warning">
      <ul>Chai, Samosa and Biotech: A casual ‘Chai-pe-Charcha’ among the PG and UG students of the department.</ul>
      <ul>Fresher’s’22: A long-awaited welcome to the batch of ‘26.</ul>  
      <ul>Farewell’23: An official wave of good-bye to the batch of ‘23</ul>  
      <ul>Insights on Research Intern: An interactive session on research interns by experienced seniors.</ul>  
      <ul>Ice-Breaker: An unofficial event </ul>
      
    </div>
  </div>
    )
}
export default Events;