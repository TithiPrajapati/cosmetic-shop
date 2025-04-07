// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import Home from "./Pages/Home";
// import Categories from "./Pages/Categories";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import BestSellers from "./Components/products/BestSellers";
import Perfume from "./Components/products/Perfume";
import Skincare from "./Components/products/Skincare";
import Makeup from "./Components/products/Makeup";
import GiftSets from "./Components/products/GiftSets";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import './App.css';
import './Components/css/global.css'
// import Login from "./Components/Login";
// import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/categories" element={<Categories />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:product_id" element={<ProductDetail />} />
          <Route path="/products/bestsellers" element={<BestSellers />} />
          <Route path="/products/makeup" element={<Makeup />} />
          <Route path="/products/perfumes" element={<Perfume />} />
          <Route path="/products/skincare" element={<Skincare />} />
          <Route path="/products/giftsets" element={<GiftSets />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;