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


    default:
      // Do nothing
      break
  }
}

export default timeEffects
