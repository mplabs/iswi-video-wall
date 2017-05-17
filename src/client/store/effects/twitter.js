import { get } from 'lodash'
import actions from '../actions'
import TwitterSource from '../../datasources/TwitterSource'

let twitterSource

export const twitterEffects = (store, action) => {
  const state = store.getState()

  switch (action.type) {

    case 'INIT': {
      twitterSource = new TwitterSource()
      break
    }

    case 'FETCH_TWEETS': {
      twitterSource.getTweets()
        .then(tweets => store.dispatch(actions.receiveTweets(tweets)))
    }
  }
}

export default twitterEffects
