import React from 'react'
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div > 
      <Navbar/>
      <div className="home-container">
      <h2>Welcome to MedMap</h2>
      <div className="medicine-images">
        <img src="path/to/medicine1.jpg" alt="Medicine 1" />
        <img src="" alt="Medicine 3" />
        {/* Add more medicine images */}
      </div>
    </div>
    </div>
    
  )
}

export default Home