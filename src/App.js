import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/home.view";
import About from "./Views/About/about.view";
import Contact from "./Views/Contactus/contact.view";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/cairo";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}