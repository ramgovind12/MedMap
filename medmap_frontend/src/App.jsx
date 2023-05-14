import React from 'react';  
import PharmacyProfile from './pages/PharmacyProfile';
import Inventory from './pages/Inventory.jsx';
import About from './pages/AboutUs.jsx';
import Orders from './pages/Orders.jsx';
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feedback from "./pages/Feedback";
import Login from './pages/login';
import Register from './pages/register';

function App() {
  
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
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
