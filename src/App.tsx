import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from "./components/components/Header";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./components/pages/homePage";
import { PlanetsPage } from "./components/pages/planetsPage";
import { CelestialBodiesPage } from "./components/pages/celestialbodiesPage";
import { RecoilRoot } from "recoil";
import { CreatePage } from "./components/pages/createPage";

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
              <Route path="/celestialbodies" element={CelestialBodiesPage()} />
              <Route path="/planetarysystems" element={PlanetsPage()} />
              <Route path="/create" element={CreatePage()} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
