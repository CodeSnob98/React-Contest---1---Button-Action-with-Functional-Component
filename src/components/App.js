import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  function handleClick() {
    const el = document.createElement("p");
    el.setAttribute("id", "para");
    const t = document.createTextNode(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    ); // Create a text node
    el.appendChild(t);
    document.getElementById("main").appendChild(el);
  }
  return (
    <div id="main">
      <button id="click" onClick={() => handleClick()}></button>
    </div>
  );
}

export default App;
