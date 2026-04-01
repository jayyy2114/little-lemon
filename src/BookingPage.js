import { useState } from "react";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guest: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="time">Choose Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={(e) => {
            handleChange(e);
            dispatch({ type: "UPDATE_TIMES", date: e.target.value });
          }}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guest">Number of guest </label>
        <input
          type="number"
          id="guest"
          name="guest"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option>Birthday </option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your Reservation</button>
      </form>
    </div>
  );
}

export default BookingPage;
