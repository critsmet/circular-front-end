const initialState = {
  loggedInEntity: "nc"
  //nc means not_checked, meaning the app has not checked for a local token
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ENTITY':
      return {
        loggedInEntity: action.payload
      }
    default:
      return state
  }
}

const setEntity = (data) => {
  console.log("entity is set", data);
  return {
    type: 'SET_ENTITY',
    payload: data
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
    console.log("in the res, about to set token and dispatch");
    localStorage.setItem('token', res.data.id)
    dispatch(setEntity(res))
  })
}

export const submitLogInForm = (form) => dispatch => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      form: {
        handle: form['handle'],
        password: form['password']
      }
    })
  })
  .then (res => res.json())
  .then( res => {
    console.log("in the res, about to set token and dispatch");
    localStorage.setItem('token', res.data.id)
    dispatch(setEntity(res))
  })
}

export const checkForEntity = () => dispatch => {
  console.log("checking for entity");
  let stored_entity = localStorage.getItem('token')
  if (stored_entity) {
    fetch(`http://localhost:3000/entities/${stored_entity}`)
      .then(res => res.json())
      .then(res => dispatch(setEntity(res)))
  } else {
    dispatch(setEntity(false))
  }
}
