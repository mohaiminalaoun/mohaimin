import React from "react";
import ProfileImg from "./assets/profile.png";
import NamePlate from "./NamePlate";
const NamePlateContainer = () => {
  const containerStyle = {
      width: "100vw",
      backgroundColor: "#eaeaea",
      height: "200px"
    },
    topStyle = {
      width: "100vw",
      backgroundColor: "#4C5885",
      height: "70px"
    },
    imgStyle = {
      width: "80px",
      height: "80px",
      backgroundColor: "#f2f2f2",
      borderRadius: "40px",
      position: "absolute",
      marginTop: "25px",
      marginLeft: "30px",
      backgroundImage: `url("${ProfileImg}")`,
      backgroundSize: "cover"
    };
  return (
    <div style={containerStyle}>
      <div style={imgStyle}></div>
      <div style={topStyle}></div>
      <NamePlate />
    </div>
  );
};

export default NamePlateContainer;
