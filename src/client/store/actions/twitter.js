export const fetchTweets = () => ({
  type: 'FETCH_TWEETS'
})

export const receiveTweets = (tweets) => ({
  type: 'RECEIVE_TWEETS',
  payload: tweets
})
