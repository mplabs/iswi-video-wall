import { h, Component } from 'preact'

import Clock from './Clock'
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
          <Clock />
        }
        {(idx === '4') && 
          <Clock />
        }
      </div>
    )
  }
}