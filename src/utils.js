/* global fetchAPI */

const defaultTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

export function initializeTimes() {
  try {
    const today = new Date();
    return fetchAPI(today);
  } catch {
    return defaultTimes;
  }
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      try {
        return fetchAPI(new Date(action.date));
      } catch {
        return defaultTimes;
      }
    default:
      return state;
  }
}
