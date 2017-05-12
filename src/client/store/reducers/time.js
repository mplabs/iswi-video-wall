export const time = (state = {}, action) => {
  switch (action.type) {

    case 'TICK':
      return Object.assign({}, { currentTime: action.payload })

    default:
      return state
  }
}
