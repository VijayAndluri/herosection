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
      <h1>Welcome to Beauty Salon</h1>
      <p>Saving time and money with seamless appointment scheduling.</p>
    </div>
  );
};

export default HeroSection;
