import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class PofileIcon extends Component<IDefIcon> {
  static displayName = PofileIcon.name

  render () {
    const fill = this.props.fill ? 
                      `${this.props.fill}`
                      :
                      `var(--clr-def-white)`
    return (
      <svg
        className={`${this.props.classes}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 21" >
          <circle cx="8.57094" cy="5.71413" r="5.21413" stroke={fill}/>
          <path d="M16 19.9999C16 15.2662 12.6421 11.4287 8.5 11.4287C4.35786 11.4287 1 15.2662 1 19.9999" stroke={fill} strokeLinecap="round"/>
      </svg>
    )
  }
}
