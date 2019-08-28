const initialState = {
  view: "week",
  eventSchedule: [],
  selectedEvent: {attributes: null},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        eventSchedule: action.payload
      }
    case 'SET_EVENT':
      console.log("setting event");
      return {
        ...state,
        selectedEvent: action.payload
      };
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

const setEvent = (selectedEvent) => {
  console.log("setting event", selectedEvent);
  return {
    type: "SET_EVENT",
    payload: selectedEvent
  }
}

//not using these rn: 
export const getEvents = (schedule) => dispatch => {
  fetch("http://localhost:3000/events")
    .then(res => res.json())
    .then((res) => dispatch(setEventSchedule(res.data)))
}

export const getEvent = (id) => dispatch => {
  fetch("http://localhost:3000/events/" + id)
    .then(res => res.json())
    .then(res => dispatch(setEvent(res.data)))
  }
