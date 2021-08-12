import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class BookingsIcon extends Component<IDefIcon> {
  static displayName = BookingsIcon.name

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
        viewBox="0 0 15 20" >
          <rect x="0.5" y="0.5" width="14" height="19" rx="1.5" stroke={fill}/>
          <line x1="3.5" y1="10.5" x2="7" y2="10.5" stroke={fill} strokeLinecap="round"/>
          <line x1="3.5" y1="6.5" x2="7" y2="6.5" stroke={fill} strokeLinecap="round"/>
          <line x1="3.5" y1="14.5" x2="7" y2="14.5" stroke={fill} strokeLinecap="round"/>
          <path d="M9 13.6L10.1293 14.7293C10.1683 14.7683 10.2317 14.7683 10.2707 14.7293L12 13" stroke={fill} strokeLinecap="round"/>
          <path d="M9 9.6L10.1293 10.7293C10.1683 10.7683 10.2317 10.7683 10.2707 10.7293L12 9" stroke={fill} strokeLinecap="round"/>
          <path d="M9 5.6L10.1293 6.72929C10.1683 6.76834 10.2317 6.76834 10.2707 6.72929L12 5" stroke={fill} strokeLinecap="round"/>
      </svg>
    )
  }
}
