import { h, Component } from 'preact'

import Clock from './Clock'
import Twitter from './Twitter'
import Weather from './Weather'

export default class Screen extends Component {

  render({ idx }) {
    return (
      <div class={`screen screen-${idx}`}>
        {(idx === '1') && 
          <Clock />
        }
        {(idx === '2') && 
          <Weather />
        }
        {(idx === '3') && 
          <Twitter />
        }
        {(idx === '4') && 
          <div className="blank row"></div>
        }
      </div>
    )
  }
}