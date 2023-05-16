import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Box from "@mui/material/Box";
// import adImage1 from "./assets/ad1.png";
// import adImage2 from "./assets/ad2.png";
// import adImage3 from "./assets/ad3.png";

function HomePage() {
  return (
    <div>
    <Navbar></Navbar>
      <div className="homepage-container">
        <h1>Welcome to the Home Page!</h1>
        <div className="ad-banners-container">
          <div className="ad-banner">
            {/* <img src={adImage1} alt="Ad Banner 1" /> */}
            <h2>Ad Banner 1</h2>
          </div>
          <div className="ad-banner ad-banner-half">
            {/* <img src={adImage2} alt="Ad Banner 2" /> */}
            <h2>Ad Banner 2</h2>
          </div>
          <div className="ad-banner ad-banner-third">
            {/* <img src={adImage3} alt="Ad Banner 3" /> */}
            <h2>Ad Banner 3</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;