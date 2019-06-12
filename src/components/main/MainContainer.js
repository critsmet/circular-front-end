import React from 'react'
import { connect } from 'react-redux'

import EntityFormContainer from '../entity-forms/EntityFormContainer.js'

const MainContainer = ( {lIE} ) => {

  return (
    <div id="main-container">
      { lIE ? "LOGGED IN" : <EntityFormContainer />}
    </div>
  )
}

const mapStateToProps = ({ app }) => {
  return {
    lIE: app.loggedInEntity
  }
}

export default connect(mapStateToProps)(MainContainer)
