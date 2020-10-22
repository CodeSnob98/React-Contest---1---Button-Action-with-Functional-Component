import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [display, setDisplay] = React.useState(false);
  function handleClick() {
    setDisplay(true);
  }
  if (display) {
    return (
      <div id="main">
        <button id="click" onClick={handleClick}></button>
      </div>
    );
  }
  return (
    <div id="main">
      <button id="click"></button>
      <p id="para">
        {
          "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
        }
      </p>
    </div>
  );
}

export default App;
