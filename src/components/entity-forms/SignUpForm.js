import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { submitSignUpForm } from '../app/appMod'

const initialState = {
  page: 1,
  name: "",
  entity: "",
  handle: "",
  email: "",
  password: "",
  confirm_password: ""
}

const SignUpForm = ( {submitSignUpForm, history} ) => {

  const [signUpState, changeSignUpState] = useState(initialState)

  useEffect(() => console.log(signUpState), [signUpState])

  const continuePage = (e) => {
    if ((e.keyCode === 13 && signUpState['page'] === 6) && (signUpState['password'] === signUpState['confirm_password'])) {
      console.log("VALID FORM!", signUpState);
      submitSignUpForm(signUpState, history)
    } else if (e.keyCode === 13) {
      changeSignUpState(prevState => ({...prevState, page: prevState['page'] + 1}))
    }

  }
  const input = (input) => (<input id="entity-form-input" className="form-input" name={input + "-input"} type="text" value={signUpState[input]} placeholder={input.split("_").join(" ")} onKeyDown={continuePage} onChange={(e) => changeSignUpState({...signUpState, [input]: e.target.value})}/>)

  const pickInputField = () => {
    switch(signUpState['page']) {
      case 1:
        return input("entity")
      case 2:
        return input("name")
      case 3:
        return input("handle")
      case 4:
        return input("email")
      case 5:
        return input("password")
      case 6:
        return input("confirm_password")
      default:
        break;
    }
  }
  return (
    <div id="entity-form-input-container" className="form-container">
      {pickInputField()}
    </div>
    )
  }

export default connect(null, { submitSignUpForm })(withRouter(SignUpForm))
