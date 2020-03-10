import React from "react";
const Experience = ({ data }) => {
  const expStyle = {
      marginRight: "25px",
      minHeight: "50px",
      border: "1px solid lightgrey",
      borderRadius: "4px",
      marginBottom: "20px",
      padding: "10px",
      maxWidth: "600px",
      backgroundColor: "white"
    },
    txtStyle = {
      marginLeft: "50px"
    },
    companyStyle = {
      fontSize: "12pt",
      fontWeight: "600"
    },
    totalTimeStyle = {
      fontSize: "10pt",
      opacity: "0.7",
      marginBottom: "25px"
    },
    roleStyle = {
      fontSize: "10pt",
      fontWeight: "600",
      marginTop: "15px"
    },
    timespanStyle = {
      fontSize: "10pt",
      opacity: 0.7
    },
    imgStyle = {
      position: "absolute",
      height: "42px",
      width: "42px",
      marginLeft: "0px",
      backgroundColor: "red",
      backgroundImage: `url("${data.src}")`,
      backgroundSize: "cover"
    };
  return (
    <div style={expStyle}>
      <div style={imgStyle}></div>
      <div style={txtStyle}>
        <div style={companyStyle}>{data.company}</div>
        <div style={totalTimeStyle}>{data.totalTime}</div>
        {data.roles.map((role, idx) => {
          return (
            <div>
              <div style={roleStyle}>{role}</div>
              <div style={timespanStyle}>{data.timespans[idx]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
