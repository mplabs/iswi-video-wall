import { h, Component } from 'preact'
import Router from 'preact-router'

import Screen from './Screen'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Screen path="/1" idx="1"></Screen>
        <Screen path="/2" idx="2"></Screen>
        <Screen path="/3" idx="3"></Screen>
        <Screen path="/4" idx="4"></Screen>
      </Router>
    )
  }
}