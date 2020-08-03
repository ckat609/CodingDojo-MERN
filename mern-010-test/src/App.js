import React from "react";
import "./App.css";

import TestComponent from "./components/new";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <TestComponent greet={"Herzlich"}></TestComponent>
    </div>
  );
}

export default App;
