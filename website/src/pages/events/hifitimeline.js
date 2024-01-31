import { Chrono } from "react-chrono";
import React from "react";

function HiFiTimeline() {
    return (
        <Chrono
      items={[
        {
          title: "2 March, 2024",
          cardTitle: "BIOSPHERE’24",
          cardSubtitle: "BETA is back with its flagship event, Biosphere. The symposium would witness participation from pharmaceutical giants and renowned guest speakers in the field of biotechnology, not to mention an overview of the exciting research being carried out in the department.",
          // cardDetailedText: `Complete description of event`,
        },
        {
          title: "24 - 27 March, 2024",
          cardTitle: "TRYST",
          url: "https://www.tryst-iitd.org/",
          cardSubtitle: "The upcoming tech fest will witness scores of competitions, guest lectures and events from BETA. Stay Tuned for event registrations.          ",
          // cardDetailedText: `Complete description of event`,
        },
        {
          title: "Date",
          cardTitle: "Demo",
          cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
          cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
        On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
        },
      ]}
      mode="VERTICAL_ALTERNATING">
        {/* <div className="chrono-icons">
    <img
      src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/about.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/idea.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/sun.png"
      alt="twitter"
    />
    <img
      src="https://img.icons8.com/ios-filled/100/000000/info.png"
      alt="twitter"
    />
    </div> */}
    </Chrono>
    )
}

export default HiFiTimeline;