const initialState = {
  loggedInEntity: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ENTITY':
    console.log("SETTING ENTITY", action.payload);
    return {
      loggedInEntity: action.payload
    }
    default:
    return state
  }
}

export const submitSignUpForm = (form) => dispatch => {
  fetch("http://localhost:3000/entities", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      entity: {
        entity_type: form['entity'],
        handle: form['handle'],
        name: form['name'],
        email: form['email'],
        password: form['password']
      }
    })
  })
  .then (res => res.json())
  .then( res => {
    console.log("in the res, about to dispatch");
    dispatch({
      type: 'SET_ENTITY',
      payload: res
    })
  })
}
