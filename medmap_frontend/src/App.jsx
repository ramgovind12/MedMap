import React from 'react';  
<<<<<<< Updated upstream
import PharmacyProfile from './components/PharmacyProfile';
import Navbar from "./components/Navbar";
import Inventory from './components/Inventory.jsx';
import About from './components/AboutUs.jsx';
import Orders from './components/Orders.jsx';
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feedback from "./components/Feedback";
=======
import PharmacyProfile from './pages/PharmacyProfile';
import Inventory from './pages/Inventory.jsx';
import About from './pages/AboutUs.jsx';
import Orders from './pages/Orders.jsx';
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Feedback from "./pages/Feedback";
import Login from './pages/Login';
// import Register from './pages/register';

>>>>>>> Stashed changes
function App() {

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
<<<<<<< Updated upstream
=======
          <Route path="login" element={<Login />} />
          {/* <Route path="register" element={<Register />} /> */}
>>>>>>> Stashed changes
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
