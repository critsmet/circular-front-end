import React from 'react'
import { connect } from 'react-redux'

const MainContainer = ( {loggedInEntity} ) => {
  return (
    <div>
      { loggedInEntity ? "LOGGED IN" : "NOT LOGGED IN"}
    </div>
  )
}

const mapStateToProps = ({ app }) => {
  return {
    loggedInEntity: app.loggedInEntity
  }
}

export default connect(mapStateToProps)(MainContainer)
