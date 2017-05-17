import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { bindActions } from '../util'
import { get } from 'lodash'
import actions from '../store/actions'
import store from '../store'

@connect(state => state.weather, bindActions(actions))
export default class Weather extends Component {

  componentDidMount() {
    store.dispatch(actions.fetchCurrentWeather())
    store.dispatch(actions.fetchForecast())
  }

  getWeatherIcon(code) {
    return (code)
      ? `http://openweathermap.org/img/w/${code}.png`
      : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  }

  render({ current, forecast }) {
    return (
      <div class="weather widget row">
        <img
          width="125" height="125"
          src={this.getWeatherIcon(get(current, 'weather[0].icon'))}
          alt={get(current, 'weather.description')} />
        <span className="currentTemp">{get(current, 'main.temp')}</span>
        <span className="maxTemp">{get(forecast, 'list[0].temp_max')}</span>
        <span className="minTemp">{get(forecast, 'list[0].temp_min')}</span>
      </div>
    )
  }
}
