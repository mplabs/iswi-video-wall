import timeEffects from './time'
import weatherEffects from './weather'
import twitterEffects from './twitter'

export default store => {
  return next => action => {
    next(action)
    timeEffects(store, action)
    weatherEffects(store, action)
    twitterEffects(store, action)
  }
}