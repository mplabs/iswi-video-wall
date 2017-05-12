export const fetchCurrentWeather = () => ({
  type: 'FETCH_CURRENT_WEATHER'
})

export const receiveCurrentWeather = (currentWeather) => ({
  type: 'RECEIVE_CURRENT_WEATHER',
  payload: currentWeather
})

export const fetchForecast = () => ({
  type: 'FETCH_FORECAST'
})

export const receiveForecast = (forecast) => ({
  type: 'RECEIVE_FORECAST',
  payload: forecast
})
