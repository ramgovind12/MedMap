import React from 'react';  
import PharmacyProfile from './components/PharmacyProfile';
import Navbar from "./components/Navbar";
import Inventory from './components/Inventory.jsx';
import About from './components/AboutUs.jsx';
import Orders from './components/Orders.jsx';
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feedback from "./components/Feedback";
function App() {

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/pharmacyprofile" element={<PharmacyProfile/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
