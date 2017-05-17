export class TwitterSource {
  
  constructor() {

  }

  getTweets() {
    return fetch('http://localhost:1337/api/twitter')
      .then(response => response.json())
  }

}

export default TwitterSource
