import React, { useState } from "react";

const Tab = (props) => {
  let buttonType = props.isActive ? "btn-info" : "btn-outline-info";
  return (
    <button className={`btn ${buttonType}`} onClick={props.setActiveTab}>
      {props.name}
    </button>
  );
};

export default Tab;
