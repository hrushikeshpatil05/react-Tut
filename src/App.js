import React, { useState } from "react";
import ClassBasedCom from "./Components/ClassBasedCom";
import "./App.css"
import FunctionBasedCom from "./Components/FunctionBasedCom";

function App() {
  
  return (
    <>
      <div className="App">
        <ClassBasedCom name="Hrushi"/>
        <p>

        </p>
        <FunctionBasedCom count="2"/>
      </div>
    </>
  );
}

export default App;

