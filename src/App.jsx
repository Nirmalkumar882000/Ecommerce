import React from "react";
import "./App.css"
import Navbar from "./componets/Navbar";
import Products from "./componets/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="/details/:id" element={<Details />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
