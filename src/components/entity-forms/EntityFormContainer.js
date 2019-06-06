import React, { useState } from 'react'
import { connect } from 'react-redux'

import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'

const EntityFormContainer = () => {

  const [selectedForm, selectForm] = useState("")

  const selectFormDiv = (
    <div id="form-select-container">
      <div onClick={() => selectForm("signup")} id="sign-up-button" className="form-select">
        SIGN UP
      </div>
      <div onClick={() => selectForm("login")} id="log-in-button" className="form-select">
        LOG IN
      </div>
    </div>
  )

  const checkForm = () => selectedForm === "signup" ? <SignUpForm/> : <LogInForm/>

  return (
    <div id="user-form-container">
      {selectedForm === "" ? selectFormDiv : checkForm()}
    </div>
  )
}

const mapStateToProps = ({ app }) => {
  return {
    lIE: app.loggedInEntity
  }
}

export default connect(mapStateToProps)(EntityFormContainer)
