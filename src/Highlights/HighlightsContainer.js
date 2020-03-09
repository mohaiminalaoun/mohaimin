import React from "react";
import Highlight from "./Highlights";
import work from "./assets/work.svg";
import college from "./assets/school.svg";
import email from "./assets/email2.svg";
import music from "./assets/music3.svg";
import projects from "./assets/projects3.svg";
import resume from "./assets/resume2.svg";

const HighlightsContainer = () => {
  const containerStyle = {
      height: "100px",
      backgroundColor: "#e2e2e2",
      overflow: "scroll",
      width: "100vw"
    },
    scrollNodeStyle = {
      width: "600px",
      whiteSpace: "nowrap"
    };
  const stories = [work, college, email, music, projects, resume].map(n => (
    <Highlight key={n} img={n} />
  ));
  return (
    <div style={containerStyle}>
      <div style={scrollNodeStyle}>{stories}</div>
    </div>
  );
};
export default HighlightsContainer;
