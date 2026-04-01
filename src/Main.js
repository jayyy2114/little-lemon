import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { initializeTimes, updateTimes } from "./utils";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
}

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
