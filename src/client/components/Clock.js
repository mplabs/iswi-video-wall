import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import moment from 'moment'

import { bindActions } from '../util'
import actions from '../store/actions'
import store from '../store'

@connect(state => state, bindActions(actions))
export default class Clock extends Component {

  getTime(currentTime) {
    return moment(currentTime).format('H:mm:ss')
  }

  getDate(currentTime) {
    return moment(currentTime).format('MMMM Do YYYY')
  }

  render({ currentTime }) {
    return (
      <div class="clock row">
        <div class="large-8 columns large-centered text-center">
          <h1>{this.getTime(currentTime)}</h1>
          <h2>{this.getDate(currentTime)}</h2>
        </div>
      </div>
    )
  }
}
