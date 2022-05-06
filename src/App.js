import React from "react";
import "./App.css";
import Home from "./pages/Home";

import "styled-components/macro";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Navbar from "./Components/Navbar";

import Projects from "./pages/Projects";
import Navbar2 from "./Components/Navbar2";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import { RadioButton } from "./Components/ContactUs";

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <div
            css={`
              @media (min-width: 992px) {
                display: none;
              }
            `}
          >
            <Navbar />
          </div>

          <div
            css={`
              @media (max-width: 991px) {
                display: none;
              }
            `}
          >
            <Navbar2 />
          </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/skill" element={<Skill />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
