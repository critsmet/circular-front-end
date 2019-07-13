import React from 'react'
import { connect} from 'react-redux'

import Nav from './Nav'

const logInHeader = (
    <div id="form-logo">
      CIRCULAR
    </div>
)

const NavContainer = ( {lIE} ) => {
  return (
    <div id="nav-container">
      {lIE ? <Nav></Nav> : logInHeader}
    </div>
  )

}

const mapStateToProps = ({ app }) => {
  return ({
    lIE: app.loggedInEntity
  })
}

export default connect(mapStateToProps)(NavContainer)
