const initialState = {
  view: "week",
  eventSchedule: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {eventSchedule: action.payload}
    default:
      return state
  }
}

const setEventSchedule = (events) => {
  console.log("setting events", events);
  return {
    type: "SET_EVENTS",
    payload: events
  }
}

export const getEvents = (schedule) => dispatch => {
  fetch("http://localhost:3000/events")
    .then(res => res.json())
    .then((res) => dispatch(setEventSchedule(res.data)))
}
