import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  return (
    <div className="container w-25">
      <h1>HELLO WORLD</h1>
      {/* <Form input={state} setInput={setState}></Form> */}
      <Form value={state} setValue={setState}></Form>
      <Results input={state}></Results>
    </div>
  );
}

export default App;
