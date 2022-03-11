import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Viewpage from "./components/Viewpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Viewpage />} />
      </Routes>
    </div>
  );
}

export default App;
