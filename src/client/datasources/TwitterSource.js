export class TwitterSource {
  
  constructor() {

  }

  getTweets() {
    return fetch('api/twitter')
      .then(response => response.json())
  }

}

export default TwitterSource
