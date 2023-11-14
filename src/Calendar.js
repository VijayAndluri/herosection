import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Select Your Appointment Slot</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        showTimeSelect
        dateFormat="Pp"
      />
    </div>
  );
};

export default DatePickerComponent;
