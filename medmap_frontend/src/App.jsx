import React from 'react';  
import PharmacyProfile from './components/PharmacyProfile';
import Inventory from './components/Inventory.jsx';
import About from './components/AboutUs.jsx';
import Orders from './components/Orders.jsx';
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feedback from "./components/Feedback";
// import Login from './components/Login';
// import Register from './components/register';

function App() {
  
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
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
