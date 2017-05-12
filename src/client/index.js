import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import store from './store'
import actions from './store/actions'

import App from './components/App'

// Remove cloak
document.body.classList.remove('invisible')

// Kickstart App
store.dispatch(actions.init({
  weather: {
    apiKey: '4c233ac20cdb0a5bcc196b479249ca8a',
    cityId: '2896514'
  }
}))

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
)