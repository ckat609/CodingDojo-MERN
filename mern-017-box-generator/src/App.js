import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import StyledBox from "./components/StyledBox";

function App() {
  const [boxes, setBoxes] = useState([
    { color: "red", width: "23", height: "23" },
    { color: "yellow", width: "23", height: "23" },
  ]);

  const addBoxes = (newColor) => {
    setBoxes((boxes) => [...boxes, newColor]);
  };

  return (
    <>
      <Form addBoxes={addBoxes} />
      {boxes.map((box) => (
        <StyledBox color={box.color} width={box.width} height={box.height} />
      ))}
    </>
  );
}

export default App;
