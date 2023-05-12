import React from 'react';
import './styles/PharmacyProfile.css'; // Import the CSS file

function PharmacyProfile() {
  // Sample pharmacy data
  const pharmacy = {
    name: 'ABC Pharmacy',
    address: '123 Main Street',
    city: 'City',
    state: 'State',
    zipcode: '12345',
    phone: '555-123-4567',
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">{pharmacy.name}</h2>
      <div className="profile-info">
        <label>Address:</label>
        <span>{pharmacy.address}</span>
      </div>
      <div className="profile-info">
        <label>City:</label>
        <span>{pharmacy.city}</span>
      </div>
      <div className="profile-info">
        <label>State:</label>
        <span>{pharmacy.state}</span>
      </div>
      <div className="profile-info">
        <label>Zipcode:</label>
        <span>{pharmacy.zipcode}</span>
      </div>
      <div className="profile-info">
        <label>Phone:</label>
        <span>{pharmacy.phone}</span>
      </div>
    </div>
  );
}

export default PharmacyProfile;
