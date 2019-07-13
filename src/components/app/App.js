import React, {useLayoutEffect} from 'react';
import { connect } from 'react-redux'
import { checkForEntity } from './appMod'

//components
import NavContainer from '../nav/NavContainer'
import MainContainer from '../main/MainContainer'

//need to find the best way to check for a user
//probably best is to set loggedInEntity to not_checked first, and then check.

const App = ({lIE, checkForEntity}) => {
  useLayoutEffect(checkForEntity, [lIE.id])

  return (
    <div id="app">
      <NavContainer/>
      <MainContainer/>
    </div>
  )
}

const mapStateToProps = ({app}) => {
  return {
    lIE : app.loggedInEntity
  }
}

export default connect(mapStateToProps, {checkForEntity})(App);
