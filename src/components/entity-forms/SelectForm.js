import React from 'react'

import { Link } from 'react-router-dom'

const SelectForm = () => {
  return (
  <div id="entity-form-container" className="form-container">
    <Link to="/signup">
      <div id="sign-up-button" className="form-select">
        SIGN UP
      </div>
    </Link>
    <Link to="/login">
      <div id="log-in-button" className="form-select">
        LOG IN
      </div>
    </Link>
  </div>
  )
}

export default SelectForm
