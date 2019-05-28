import { combineReducers } from 'redux'

import appReducer from './mods/appMod'

export default combineReducers({
  app: appReducer
})
