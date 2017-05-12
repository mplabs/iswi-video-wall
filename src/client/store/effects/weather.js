import { get } from 'lodash'
import actions from '../actions'
import OpenWeather from '../../lib/OpenWeather'

let weather

export const weatherEffects = (store, action) => {
  const state = store.getState()
  let interval
  switch (action.type) {

    case 'INIT':
      const { apiKey, cityId } = get(action.payload, 'weather')
      weather = new OpenWeather({ apiKey, cityId })
      break

    case 'FETCH_CURRENT_WEATHER':
      weather.getCurrentWeather()
        .then(currentWeather => store.dispatch(actions.receiveCurrentWeather(currentWeather)))
      break

    case 'FETCH_FORECAST':
      weather.getForecast()
        .then(forecast => store.dispatch(actions.receiveForecast(forecast)))
      break


    default:
      // Do nothing
      break
  }
}

export default weatherEffects
