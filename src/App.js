import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/home.view";
import About from "./Views/About/about.view";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}