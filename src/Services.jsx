import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HeroSection = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="hero-section">
      <h1>Welcome to Our Appointment Booking System</h1>
      <p>Saving time and money with seamless appointment scheduling.</p>
      <div>

        <h2>Select Your Appointment Slot</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          showTimeSelect
          dateFormat="Pp"
        />
        <button onClick></button>
      </div>
      <button>Book Now</button>
    </div>
  );
};

export default HeroSection;

