export const weather = (state = {}, action) => {
  switch (action.type) {

    case 'RECEIVE_CURRENT_WEATHER':
      return Object.assign({}, state, { current: action.payload })

    case 'RECEIVE_FORECAST':
      return Object.assign({}, state, { forecast: action.payload })
    
    default:
      return state
  }
}
