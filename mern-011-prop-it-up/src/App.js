import React from "react";
import "./App.css";

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <>
      <PersonCard name={"Doe, Jane"} age={45} hair={"Black"}></PersonCard>
      <PersonCard name={"Smith, John"} age={88} hair={"Blonde"}></PersonCard>
      <PersonCard
        name={"Fillmore, Millard"}
        age={40}
        hair={"Brown"}
      ></PersonCard>
      <PersonCard name={"Smith, Maria"} age={62} hair={"Brown"}></PersonCard>
    </>
  );
}

export default App;
