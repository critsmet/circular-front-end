import React from 'react'
import { connect } from 'react-redux'

import EntityFormContainer from '../entity-forms/EntityFormContainer.js'
import WeekViewContainer from '../events/WeekViewContainer.js'

const MainContainer = ( {lIE} ) => {

  return (
    <div id="main-container">
      { lIE ? <WeekViewContainer/> : <EntityFormContainer />}
    </div>
  )
}

const mapStateToProps = ({ app }) => {
  return {
    lIE: app.loggedInEntity
  }
}

export default connect(mapStateToProps)(MainContainer)
