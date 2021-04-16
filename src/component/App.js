import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

function App() {
  const [state, setCount] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setCount((state) => calculate(state, buttonName));
  };

  return (
    <div className="component-app">
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App
