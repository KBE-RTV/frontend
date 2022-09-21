import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/components/Header";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./components/pages/homePage";
import { PlanetsPage } from "./components/pages/planetsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div style={{display: "block"}}>
          <Header />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={HomePage()} />
            <Route path="/planets" element={PlanetsPage()} />
          </Routes>
        </div>
      </div>
    </Router>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
