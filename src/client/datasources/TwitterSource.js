export class TwitterSource {
  
  constructor() {

  }

  getTweets() {
    return fetch('http://10.10.10.1:1337/api/twitter')
      .then(response => response.json())
  }

}

export default TwitterSource
