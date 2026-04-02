import { initializeTimes, updateTimes } from "./utils";

test("initializeTimes returns a non-empty array", () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns a non-empty array for a given date", () => {
  const state = ["17:00", "18:00"];
  const result = updateTimes(state, {
    type: "UPDATE_TIMES",
    date: "2026-04-02",
  });
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});
