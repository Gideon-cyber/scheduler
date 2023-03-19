import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const daysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getDaysArray = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
    const totalDays = daysInMonth(date);
    const totalWeeks = Math.ceil((totalDays + startingDay) / 7);
    const daysArray = [];

    let day = 1;
    for (let i = 0; i < totalWeeks; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          week.push("");
        } else if (day > totalDays) {
          week.push("");
        } else {
          week.push(day);
          day++;
        }
      }
      daysArray.push(week);
    }

    return daysArray;
  };

  const getTimeSlots = () => {
    const timeSlots = [];
    for (let i = 0; i < 24; i++) {
      const hour = i < 10 ? "0" + i : i;
      for (let j = 0; j < 4; j++) {
        const minute = j * 15;
        const minuteString = minute < 10 ? "0" + minute : minute;
        const timeSlot = `${hour}:${minuteString}`;
        timeSlots.push(timeSlot);
      }
    }
    return timeSlots;
  };

  const daysArray = getDaysArray(date);
  const timeSlots = getTimeSlots();

  return (
    <div className="calendar-container">
      <div className="month-header">
        {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </div>
      <div className="day-header">
        <div className="day-header-cell">Sun</div>
        <div className="day-header-cell">Mon</div>
        <div className="day-header-cell">Tue</div>
        <div className="day-header-cell">Wed</div>
        <div className="day-header-cell">Thu</div>
        <div className="day-header-cell">Fri</div>
        <div className="day-header-cell">Sat</div>
      </div>
      <div className="calendar-grid">
        {daysArray.map((week, i) =>
          week.map((day, j) => (
            <div className="calendar-cell" key={`${i}-${j}`}>
              {day && <div className="day-number">{day}</div>}
              <div className="time-slots">
                {timeSlots.map((timeSlot, k) => (
                  <div className="time-slot" key={`${i}-${j}-${k}`}>
                    {day && <div className="time-slot-label">{timeSlot}</div>}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Calendar;
