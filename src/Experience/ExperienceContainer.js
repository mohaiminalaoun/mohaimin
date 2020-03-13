import React from "react";
import Experience from "./Experience";
import mstr from "./assets/mstr.jpg";
import dr from "./assets/dr.png";
import vandy from "./assets/vandy.png";
const ExperienceContainer = () => {
  const containerStyle = {
      paddingLeft: "25px",
      paddingTop: "20px",
      backgroundColor: "#e9ebee"
    },
    titleStyle = {
      marginBottom: "20px"
    },
    data = [
      {
        company: "MicroStrategy",
        totalTime: "2 years 11 months",
        timespans: ["October 2018 - March 2020", "June 2017 - October 2018"],
        roles: ["Front-end Software Engineer", "Associate Software Engineer"],
        src: mstr
      },
      {
        company: "Digital Reasoning",
        totalTime: "4 months",
        timespans: ["May 2016 - August 2016"],
        roles: ["Front-end Software Engineering Intern"],
        src: dr
      },
      {
        company: "Vanderbilt University",
        totalTime: "2 years",
        timespans: [
          "Jan 2017 - May 2017",
          "Jan 2016 - May 2016",
          "August 2015 - May 2016"
        ],
        roles: [
          "EECS Teaching Assistant",
          "EECS Teaching Assistant",
          "Design Studio Mentor"
        ],
        src: vandy
      }
    ];
  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Experience</div>
      <Experience data={data[0]} />
      <Experience data={data[1]} />
      <Experience data={data[2]} />
    </div>
  );
};
export default ExperienceContainer;
