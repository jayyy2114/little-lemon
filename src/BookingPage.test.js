import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

test("Renders the BookingPage heading", () => {
  render(
    <BookingPage
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />,
  );
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test("date input has required attribute", () => {
  render(
    <BookingPage
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />,
  );
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("required");
});

test("guests input has min and max attributes", () => {
  render(
    <BookingPage
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />,
  );
  const guestsInput = screen.getByRole("spinbutton");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});
