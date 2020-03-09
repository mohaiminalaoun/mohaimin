import React from "react";

const NamePlate = () => {
  const plateStyle = {
      height: "75px",
      width: "300px",
      marginTop: "55px",
      marginLeft: "25px"
    },
    nameStyle = {
      fontSize: "12pt",
      fontWeight: "600"
    },
    titleStyle = {
      fontSize: "10pt",
      opacity: "0.7"
    },
    collegeStyle = {
      fontSize: "10pt",
      opacity: "0.7"
    },
    areaStyle = {
      fontSize: "9pt",
      opacity: "0.7"
    };
  return (
    <div style={plateStyle}>
      <div style={nameStyle}>Mohaimin Al Aoun</div>
      <div style={titleStyle}>Software Engineer at MicroStrategy</div>
      <div style={collegeStyle}>Vanderbilt University 2017</div>
      <div style={areaStyle}>Washington D.C. Metro Area</div>
    </div>
  );
};

export default NamePlate;
