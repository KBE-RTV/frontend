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
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <div className="App">
          <div style={{display: "block"}}>
            <Header />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={HomePage()} />
              <Route path="/celestialbodies" element={
                <PrivateRoute>
                  <CelestialBodiesPage />
                </PrivateRoute>} />
              <Route path="/planetarysystems" element={
                <PrivateRoute>
                  <PlanetsPage/>
                </PrivateRoute>
                } />
              <Route path="/create" element={
                <PrivateRoute>
                  <CreatePage/>
                </PrivateRoute>} />
            </Routes>
          </div>
        </div>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
