import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { initializeTimes, updateTimes } from "./utils";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

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
