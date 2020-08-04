import React from "react";

const PersonCard = (props) => {
  return (
    <>
      <h1>
        {props.lname}, {props.fname}
      </h1>
      <p>Age: {props.age}</p>
      <p>Hair color: {props.hair}</p>
    </>
  );
};

export default PersonCard;
