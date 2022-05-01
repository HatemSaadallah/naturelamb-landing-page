import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/home.view";
import About from "./Views/About/about.view";
import Contact from "./Views/Contactus/contact.view";
import Products from "./Views/Products/products.view";
import ProductDetails from "./Views/ProductDetails/product-details.view";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        {/* Create Custom Route with props - ProductDetails */}
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}