import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [p, setP] = React.useState("");
  function handleClick() {
    setP(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  }
  return (
    <div id="main">
      <button id="click" onClick={() => handleClick()}></button>
      <p id="para">{p}</p>
    </div>
  );
}

export default App;
