import { h, Component } from 'preact'
import { get } from 'lodash'

export default class TwitterMedia extends Component {

  getStyles(url, size) {
    console.log(size)
    return `background-image: url('${url}');width: ${size.w}px;height: ${size.h}px`
  }

  render({ media, size }) {
    const { media_url, display_url, sizes } = media
    return (
      <div class="twitter-media" style={this.getStyles(media_url, get(sizes, size, 'small'))}></div>
    )
  }
}
