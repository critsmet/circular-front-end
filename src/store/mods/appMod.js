const initialState = {
  loggedInEntity: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN_ENTITY':
    return {
      loggedInEntity: action.payload
    }
    default:
    return state
  }
}
