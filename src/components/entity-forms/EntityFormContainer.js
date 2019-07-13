import React, { useState } from 'react'
// import { connect } from 'react-redux'

import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'

const EntityFormContainer = () => {

  const [selectedForm, selectForm] = useState("")

  const selectFormDiv = (
    <React.Fragment>
      <div onClick={() => selectForm("signup")} id="sign-up-button" className="form-select">
        SIGN UP
      </div>
      <div onClick={() => selectForm("login")} id="log-in-button" className="form-select">
        LOG IN
      </div>
    </React.Fragment>
  )

  const checkForm = () => selectedForm === "signup" ? <SignUpForm/> : <LogInForm/>

  return (
    <div id="entity-form-container">
      {selectedForm === "" ? selectFormDiv : checkForm()}
    </div>
  )
}

export default (EntityFormContainer)
