import { combineReducers } from 'redux'

import appReducer from '../components/app/appMod'

export default combineReducers({
  app: appReducer
})
