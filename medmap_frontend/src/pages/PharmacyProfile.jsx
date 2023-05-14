import React from 'react';
import '../styles/PharmacyProfile.css';
import pharmProfileImage from '../assets/images/pharprofile.jpeg';
import pharmacist from '../assets/images/pharmacist.jpeg';
import Navbar from "../components/Navbar";
function PharmacyProfile() {
  // Sample pharmacy data
  const pharmacy = {
    name: 'ABC Pharmacy',
    address: '123 Main Street',
    city: 'City',
    state: 'State',
    zipcode: '12345',
    phone: '555-123-4567',
    email: 'pharmacy@example.com',
    hours: [
      { day: 'Monday', open: '9:00 AM', close: '6:00 PM' },
      { day: 'Tuesday', open: '9:00 AM', close: '6:00 PM' },
      { day: 'Wednesday', open: '9:00 AM', close: '6:00 PM' },
      { day: 'Thursday', open: '9:00 AM', close: '6:00 PM' },
      { day: 'Friday', open: '9:00 AM', close: '6:00 PM' },
      { day: 'Saturday', open: '10:00 AM', close: '2:00 PM' },
      { day: 'Sunday', open: 'Closed', close: 'Closed' },
    ],
    pharmacist: {
      name: 'John Smith',
      profilePicture: {pharmProfileImage},
    },
    reviews: [
      { id: 1, rating: 4.5, comment: 'Great service!', author: 'Jane Doe' },
      { id: 2, rating: 5, comment: 'Best pharmacy in town!', author: 'John Doe' },
    ],
    services: [
      'Prescription dispensing',
      'Over-the-counter medication',
      'Vaccination services',
      'Home delivery',
    ],
  };

  return (
    
    <div>
      <Navbar/>
      <div className="profile-container">
      <header>
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={pharmProfileImage} alt="Pharmacy Avatar" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{pharmacy.name}</h1>
            <div className="profile-address">
              <p>{pharmacy.address}</p>
              <p>{pharmacy.city}, {pharmacy.state} {pharmacy.zipcode}</p>
              <p>Phone: {pharmacy.phone}</p>
              <p>Email: {pharmacy.email}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="profile-section">
        <h2 className="section-title">Opening Hours</h2>
        <ul className="hours-list">
          {pharmacy.hours.map((day) => (
            <li key={day.day}>
              <span className="day">{day.day}:</span>
              <span className="time">{day.open} - {day.close}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="profile-section">
        <h2 className="section-title">Pharmacist</h2>
        <div className="pharmacist-container">
          <div className="pharmacist-avatar">
            <img src={pharmacist} alt="Pharmacist Avatar" />
          </div>
          <div className="pharmacist-info">
            <p className="pharmacist-name">{pharmacy.pharmacist.name}</p>
          </div>
          </div>
      </section>

      <section className="profile-section">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="reviews-container">
          {pharmacy.reviews.map((review) => (
            <div key={review.id} className="review-item">
              <p className="review-author">{review.author}</p>
              <div className="review-rating">
                <span className="star">&#9733;</span>
                <span className="rating">{review.rating}</span>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <h2 className="section-title">Services Offered</h2>
        <ul className="services-list">
          {pharmacy.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>
    </div>
    </div>
  );
}

export default PharmacyProfile;

       
