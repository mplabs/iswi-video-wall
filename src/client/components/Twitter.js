import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { bindActions } from '../util'
import actions from '../store/actions'
import store from '../store'

import TwitterMedia from './TwitterMedia'

@connect(state => state, bindActions(actions))
export default class Twitter extends Component {

  componentDidMount() {
    store.dispatch(actions.fetchTweets())
  }

  render({ tweets }) {
    return (
      <div class="twitter widget row">
        <h1 class="logo logo-twitter">Twitter</h1>
        <ul>
          {tweets && tweets.map(tweet => (
            <li class="tweet row">
              <div className="col-md-8">
                <h2>@{ tweet.user.screen_name }</h2>
                <p>{ tweet.text }</p>
              </div>
              { tweet.entities.media && tweet.entities.media.slice(0, 1).map(media => (
                <TwitterMedia class="col-md-4" media={media} size="thumb" />
              ))}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
