import { Chrono } from "react-chrono";
import React from "react";

function HiFiTimeline() {
    return (
        <Chrono
      items={[
						 {
          title: "2nd March",
          cardTitle: "BioSphere’24",
          cardSubtitle: "BETA is back with its flagship event, Biosphere. The symposium would witness participation from pharmaceutical giants and renowned guest speakers in the field of biotechnology, not to mention an overview of the exciting research being carried out in the department.  ",
          cardDetailedText: ``,
        },
        {
          title: "24-27th March",
          cardTitle: "Tryst'24",
          url: "https://www.tryst-iitd.org",
          cardSubtitle: "The upcoming tech fest will witness scores of competitions, guest lectures and events from BETA. Stay Tuned for event registrations.",
          cardDetailedText: ``,
        },   
      ]}
      mode="VERTICAL_ALTERNATING">
export default HiFiTimeline;