import React from "react";
// import AltTimeline from "./timeline";
import HiFiTimeline from "./hifitimeline";

function Events() {
  return(
  <div>
    <div class="d-flex justify-content-center p-5 bg-warning"><h1>Upcoming Events</h1></div>
    {/* <AltTimeline /> */}
    <HiFiTimeline />
    <div class="d-flex justify-content-center p-5 bg-warning"><h1>Events History</h1></div>
  </div>
    )
}
export default Events;