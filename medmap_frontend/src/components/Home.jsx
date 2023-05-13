import React from 'react'

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to MedMap</h2>
      <div className="medicine-images">
        <img src="path/to/medicine1.jpg" alt="Medicine 1" />
        <img src="path/to/medicine2.jpg" alt="Medicine 2" />
        <img src="path/to/medicine3.jpg" alt="Medicine 3" />
        {/* Add more medicine images */}
      </div>
    </div>
  )
}

export default Home