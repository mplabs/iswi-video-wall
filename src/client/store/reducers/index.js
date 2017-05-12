import { combineReducers } from 'redux'

import * as time from './time'
import * as weather from './weather'

export default combineReducers(
  Object.assign({}, time, weather)
)
