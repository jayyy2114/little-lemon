import { initializeTimes, updateTimes } from "./utils";

test("initializeTimes returns correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns same state for unknown action", () => {
  const state = ["17:00", "18:00"];
  const result = updateTimes(state, { type: "UNKNOWN" });
  expect(result).toEqual(state);
});
