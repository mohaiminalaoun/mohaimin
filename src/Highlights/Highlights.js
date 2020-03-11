import React from "react";
import "./Highlight.css";

const Highlight = ({ img }) => {
  console.log(img);
  const storyStyle = {
      display: "inline-block",
      marginLeft: "25px",
      marginTop: "20px",
      borderRadius: "30px",
      height: "60px",
      width: "60px",
      backgroundColor: "white",
      backgroundImage: `url("${img}")`,
      backgroundSize: "cover"
    },
    backgroundStyle = {
      border: "2px solid red",
      borderRadius: "30px",
      height: "57px",
      width: "57px",
      display: "inline-block",
      position: "absolute",
      marginLeft: "25px",
      marginTop: "20px"
    };
  return (
    <>
      <div className={"highlight-background"} style={backgroundStyle}></div>
      <div className={"highlight"} style={storyStyle}></div>
    </>
  );
};

export default Highlight;
