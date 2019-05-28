import React from 'react'
import { connect} from 'react-redux'

const NavContainer = ( {loggedInEntity} ) => {

  return (
    <div id="nav-container">
      <div id="logo">
        CIRCULAR
      </div>
    </div>
  )
}


const mapStateToProps = ({ app }) => {
  return {
    loggedInEntity: app.loggedInEntity
  }
}

export default connect(mapStateToProps)(NavContainer)
