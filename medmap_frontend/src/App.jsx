import React from 'react';  
// import PharmacyProfile from './components/PharmacyProfile';
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from './components/Inventory.jsx';
import AboutUsPage from './components/AboutUs.jsx';
import OrdersPage from './components/Orders.jsx';
import Home from "./components/Home.jsx";
import PharmacyProfile from './components/PharmacyProfile';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/pharmacyprofile" element={<PharmacyProfile />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
