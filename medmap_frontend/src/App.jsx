import React from 'react';  
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
      <Navbar></Navbar>
      <Inventory></Inventory>
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
