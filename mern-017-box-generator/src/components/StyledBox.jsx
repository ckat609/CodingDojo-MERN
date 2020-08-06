import React from "react";

const StyledBox = ({ color, width, height }) => {
  return (
    <div
      style={{
        width: width + "px",
        height: height + "px",
        backgroundColor: color,
      }}
    ></div>
  );
};

export default StyledBox;
