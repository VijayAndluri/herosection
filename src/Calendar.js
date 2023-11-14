// // Calendar.js
// import React, { useState } from 'react';

// const Calendar = () => {
//   const [date, setDate] = useState(new Date());

//   const daysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getMonthData = () => {
//     const year = date.getFullYear();
//     const month = date.getMonth();

//     const firstDay = new Date(year, month, 1).getDay();
//     const totalDays = daysInMonth(year, month);
//     const lastMonthDays = daysInMonth(year, month - 1);

//     const monthData = [];
//     let day = 1;

//     // Add previous month's days
//     for (let i = 0; i < firstDay; i++) {
//       monthData.push(lastMonthDays - firstDay + i + 1);
//     }

//     // Add current month's days
//     for (let i = 0; i < totalDays; i++) {
//       monthData.push(day++);
//     }

//     return monthData;
//   };

//   const handlePrevMonth = () => {
//     setDate(new Date(date.getFullYear(), date.getMonth() - 1));
//   };

//   const handleNextMonth = () => {
//     setDate(new Date(date.getFullYear(), date.getMonth() + 1));
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={handlePrevMonth}>Previous Month</button>
//         <span>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
//         <button onClick={handleNextMonth}>Next Month</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Sun</th>
//             <th>Mon</th>
//             <th>Tue</th>
//             <th>Wed</th>
//             <th>Thu</th>
//             <th>Fri</th>
//             <th>Sat</th>
//           </tr>
//         </thead>
//         <tbody>
//           {getMonthData().map((day, index) => (
//             <td key={index}>{day}</td>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Calendar;

// DatePickerComponent.js
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
