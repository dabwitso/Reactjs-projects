import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    // using BEM naming convention
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
