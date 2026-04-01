import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

test("Renders the BookingPage heading", () => {
  render(
    <BookingPage availableTimes={["17:00", "18:00"]} dispatch={() => {}} />,
  );
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});
