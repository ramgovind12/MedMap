import React from 'react';  
// import PharmacyProfile from './components/PharmacyProfile';
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from './components/Inventory.jsx';
import AboutUsPage from './components/AboutUs.jsx';
import OrdersPage from './components/Orders.jsx';
import Home from "./components/Home.jsx";
import PharmacyProfile from './components/PharmacyProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Feedback from "./components/Feedback";
import Navbar from "./components/Navbar"
import Inventory from './components/Inventory';

function App() {

  return (
    <div className="App">
      <PharmacyProfile></PharmacyProfile>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route path="/about" element={<About />} />
    //       <Route path="/feedback" element={<Feedback />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App;
