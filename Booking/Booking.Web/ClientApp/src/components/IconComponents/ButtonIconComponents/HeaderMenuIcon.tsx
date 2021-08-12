import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class HeaderMenuIcon extends Component<IDefIcon> {
  static displayName = HeaderMenuIcon.name

  render () {
    const fill = this.props.fill ? 
                      `${this.props.fill}`
                      :
                      `var(--clr-def-black)`
    return (
      <svg
        className={`${this.props.classes}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 20" >
          <line x1="10" y1="19" x2="30" y2="19" stroke={fill} strokeWidth="2"/>
          <line x1="5" y1="9" x2="30" y2="9" stroke={fill} strokeWidth="2"/>
          <line y1="1" x2="30" y2="1" stroke={fill} strokeWidth="2"/>
      </svg>
    )
  }
}
