import React from 'react';
import { useState } from 'react';
import Calendar from './Calendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HeroSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleButtonClick = () => {
    if (showCalendar === false) {
      setShowCalendar(true);
    } else if (showCalendar === true) {
      setShowCalendar(false);
    }
  };
  return (
    <div className="hero-section">
      <h1>Welcome to Our Appointment Booking System</h1>
      <p>Saving time and money with seamless appointment scheduling.</p>
      <Router>
      <div>
        {showCalendar && (
          <Routes>
            <Route path="/" element={<Calendar />} />
          </Routes>
        )}
        <button onClick={handleButtonClick}>Book Now</button>
      </div>
    </Router>
    </div>
  );
};

export default HeroSection;

