import timeEffects from './time'
import weatherEffects from './weather'

export default store => {
  return next => action => {
    next(action)
    timeEffects(store, action)
    weatherEffects(store, action)
  }
}