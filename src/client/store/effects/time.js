import moment from 'moment'
import actions from '../actions'

export const timeEffects = (store, action) => {
  const state = store.getState()
  let interval
  switch (action.type) {

    case 'INIT':
      interval = setInterval(() =>
        store.dispatch(actions.tick(new Date())
      ), 1000)
      break

    case 'REGISTER_TIMEOUT': {
      const { callee, timeout } = action.payload
      const id = setTimeout(() => store.dispatch(callee), timeout)
      store.dispatch(actions.timeoutRegistered(id))
      break
    }

    case 'REGISTER_INTERVAL': {
      const { callee, interval, immediate = false } = action.payload
      const id = setInterval(() => store.dispatch(callee), interval)
      store.dispatch(actions.intervalRegistered(id))
      if (immediate) {
        store.dispatch(callee)
      }
      break
    }

    case 'CANCEL_TIMEOUT': {
      const id = action.payload
      clearTimeout(id)
      break
    }

    case 'CANCEL_INTERVAL': {
      const id = action.payload
      clearInterval(id)
      break
    }

    default:
      // Do nothing
      break
  }
}

export default timeEffects
