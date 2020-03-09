import React from "react";

const Highlight = ({ img }) => {
  console.log(img);
  const storyStyle = {
    display: "inline-block",
    marginLeft: "25px",
    marginTop: "20px",
    borderRadius: "30px",
    height: "60px",
    width: "60px",
    border: "2px solid red",
    backgroundColor: "white",
    backgroundImage: `url("${img}")`,
    backgroundSize: "cover",
    opacity: 0.7
  };
  return <div style={storyStyle}></div>;
};

export default Highlight;
