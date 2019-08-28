import React, {useLayoutEffect} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

//actions
import { checkForEntity } from './appMod'

//components
import NavContainer from '../nav/NavContainer'
import WeekViewContainer from '../events/WeekViewContainer'
import MonthViewContainer from '../events/MonthViewContainer'
import DayViewContainer from '../events/DayViewContainer'
import EventShow from '../events/EventShow'
import EventIndex from '../events/EventIndex'
import EntityShow from '../entities/EntityShow'
import EventCreate from '../events/EventCreate'
import SelectForm from '../entity-forms/SelectForm'
import SignUpForm from '../entity-forms/SignUpForm'
import LogInForm from '../entity-forms/LogInForm'

//need to find the best way to check for a user
//probably best is to set loggedInEntity to not_checked first, and then check.

const App = ({lIE, checkForEntity, history}) => {
  console.log(lIE);

  useLayoutEffect(() => checkForEntity(history), [lIE.id])

  return (
    <div id="app">
      <NavContainer/>
        <Switch>
          <Route exact path="/" component={WeekViewContainer}/>
          <Route path="/search" component={EventIndex} />
          <Route path="/account" component={SelectForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LogInForm} />
          <Route path="/events/month" component={MonthViewContainer} />
          <Route path="/events/week" component={WeekViewContainer} />
          <Route path="/events/day/:day" component={DayViewContainer} />
          <Route path="/events/create" component={EventCreate} />
          <Route path="/events/:id" component={EventShow} />
          <Route path="/entities/:id" component={EntityShow} />
        </Switch>
    </div>
  )
}

const mapStateToProps = ({app}) => {
  return {
    lIE : app.loggedInEntity
  }
}

export default connect(mapStateToProps, {checkForEntity})(withRouter(App));
