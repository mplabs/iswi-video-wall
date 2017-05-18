require('dotenv').config()

import { Router } from 'express'
import Twitter from 'twitter'
import request from 'request'
import rp from 'request-promise'

let twitter

const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = process.env

const encodeTokenRequest = ({key, secret}) =>
  new Buffer(`${encodeURI(key)}:${encodeURI(secret)}`).toString('base64')

const options = {
  method: 'POST',
  uri: 'https://api.twitter.com/oauth2/token',
  headers: {
    'Authorization': 'Basic ' + encodeTokenRequest({
      key: TWITTER_CONSUMER_KEY,
      secret: TWITTER_CONSUMER_SECRET,
    }),
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: 'grant_type=client_credentials'
}

rp(options).then(response => JSON.parse(response)).then(response => {
  const bearer_token = response.access_token
  twitter = new Twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    bearer_token})
}).catch(error => console.log(error.message))

const router = Router()

router.get('/', (req, res) => {
  twitter && twitter.get('search/tweets', { q: encodeURIComponent('iswi2017 iswi'), count: 25 })
    .then(result => res.send(result.statuses))
    .catch(error => {
      console.error(error)
      res.sendStatus(500)
    })
})

export default router