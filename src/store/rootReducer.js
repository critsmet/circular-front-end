import { combineReducers } from 'redux'

import appReducer from '../components/app/appMod'
import eventsReducer from '../components/events/eventsMod'
import navReducer from '../components/nav/navMod'

export default combineReducers({
  app: appReducer,
  events: eventsReducer,
  nav: navReducer
})
