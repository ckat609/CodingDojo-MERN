import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [cart, setCart] = useState([
    { name: "Milk", color: "yellow" },
    { name: "Pizza", color: "rebeccapurple" },
    { name: "Jello", color: "tomato" },
  ]);

  const addItemToCart = (newItem) => {
    setCart((prev) => [...prev, newItem]);
  };

  const delItemFromCart = (i) => {
    setCart((prev) => [...prev.slice(0, i), ...prev.slice(i + 1)]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Shopping List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Form addItemToCart={addItemToCart} />
        </div>
        <div className="col">
          <List cart={cart} delItemFromCart={delItemFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
