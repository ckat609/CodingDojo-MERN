import React from "react";
import "./App.css";
import PersonComponent from "./components/PersonCard";

function App() {
  return (
    <>
      <PersonComponent
        fname={"Jane"}
        lname={"Doe"}
        age={45}
        hair={"black"}
      ></PersonComponent>
      <PersonComponent
        fname={"Joh"}
        lname={"Smith"}
        age={88}
        hair={"brown"}
      ></PersonComponent>
    </>
  );
}

export default App;
