import React from 'react'
import { connect} from 'react-redux'

const NavContainer = ( {lIE} ) => {

  return (
    <div id="nav-container">
      <div id="logo" className={lIE ? null : "center"}>
        CIRCULAR
      </div>
    </div>
  )
}


const mapStateToProps = ({ app }) => {
  return {
    lIE: app.loggedInEntity
  }
}

export default connect(mapStateToProps)(NavContainer)
