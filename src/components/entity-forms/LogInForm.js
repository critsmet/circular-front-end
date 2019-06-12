import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { submitLogInForm } from '../app/appMod'

const initialState = {
  page: 1,
  handle: '',
  password: ''
}

const LogInForm = ( {submitLogInForm} ) => {

  const [logInState, changeLogInState] = useState(initialState)

  useEffect(() => console.log(logInState), [logInState])

  const continuePage = (e) => {
    if ((e.keyCode === 13 && logInState['page'] === 2) && logInState['password']) {
      console.log("VALID FORM!", logInState);
      submitLogInForm(logInState)
    } else if (e.keyCode === 13) {
      changeLogInState(prevState => ({...prevState, page: prevState['page'] + 1}))
    }

  }
  const input = (input) => (<input id="entity-form-input" className="form-input" name={input + "-input"} type="text" value={logInState[input]} placeholder={input.split("_").join(" ")} onKeyDown={continuePage} onChange={(e) => changeLogInState({...logInState, [input]: e.target.value})}/>)

  const pickInputField = () => {
    switch(logInState['page']) {
      case 1:
        return input("handle")
      case 2:
        return input("password")
      default:
        break;
    }
  }
  return (
    <div id="entity-form-input-container">
      {pickInputField()}
    </div>
    )
  }

export default connect(null, { submitLogInForm })(LogInForm)
