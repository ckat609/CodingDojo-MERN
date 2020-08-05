import React from "react";

const Results = (props) => {
  return (
    <>
      <p>First name: {props.input.fname}</p>
      <p>Last name: {props.input.lname}</p>
      <p>Email: {props.input.email}</p>
      <p>Password: {props.input.password}</p>
      <p>Password confirmation: {props.input.password_confirmation}</p>
    </>
  );
};

export default Results;
