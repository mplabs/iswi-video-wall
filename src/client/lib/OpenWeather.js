export default class OpenWeather {

  constructor({ apiKey, cityId, units = 'metric' }) {
    this.apiKey = apiKey
    this.cityId = cityId
    this.units = units
  }

  getCurrentWeather() {
    return fetch(this._getUrl('weather'))
      .then(response => response.json())
  }

  getForecast() {
    return fetch(this._getUrl('forecast'))
      .then(response => response.json())
  }

  _getUrl(endpoint) {
    return `http://api.openweathermap.org/data/2.5/${endpoint}?id=${this.cityId}&APPID=${this.apiKey}&units=${this.units}`
  }
}