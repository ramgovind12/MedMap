import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PharmacyProfile from './components/PharmacyProfile';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import Feedback from './components/Feedback';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/pharmacy-profile" component={PharmacyProfile} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/orders" component={Orders} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/about-us" component={AboutUs} />
      </div>
    </Router>
  );
}

export default App;
