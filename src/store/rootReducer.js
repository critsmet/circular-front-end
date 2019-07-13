import { combineReducers } from 'redux'

import appReducer from '../components/app/appMod'
import eventsReducer from '../components/events/eventsMod'

export default combineReducers({
  app: appReducer,
  events: eventsReducer
})
