const initialState = {
  filter: "all"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
    return {
      filter: action.payload
    }
    default:
      return state
  }
}

export const setFilter = (event) => {
  return {
    type: 'SET_FILTER',
    payload: event.target.parentElement.id.split("-")[0]
    //disgusting code!!! clean!!!
  }

}
