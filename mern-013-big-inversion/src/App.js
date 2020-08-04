import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <>
      <PersonCard
        fname={"Armando"}
        lname={"Tello"}
        age={42}
        hair={"Dark Brown"}
      ></PersonCard>
      <PersonCard
        fname={"Ana"}
        lname={"Garcia"}
        age={47}
        hair={"Black"}
      ></PersonCard>
      <PersonCard
        fname={"Hugo"}
        lname={"Norton"}
        age={41}
        hair={"Black"}
      ></PersonCard>
      <PersonCard
        fname={"Julie"}
        lname={"Raff"}
        age={37}
        hair={"Blonde"}
      ></PersonCard>
    </>
  );
}

export default App;
