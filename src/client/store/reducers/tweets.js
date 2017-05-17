export const tweets = (state = [], action) => {
  switch (action.type) {

    case 'RECEIVE_TWEETS': {
      return [...action.payload]
    }

    default:
      return state
  }
}
