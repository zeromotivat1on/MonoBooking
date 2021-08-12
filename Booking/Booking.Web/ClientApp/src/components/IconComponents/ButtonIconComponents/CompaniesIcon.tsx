import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class CompaniesIcon extends Component<IDefIcon> {
  static displayName = CompaniesIcon.name

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
        viewBox="0 0 17 22" >
          <path d="M11 21V6H16V21H11Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 21V6L11 1V21H1Z" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="3.5" y1="8.5" x2="8.5" y2="8.5" stroke={fill} strokeLinecap="round"/>
          <line x1="12.5" y1="10" x2="14.5" y2="10" stroke={fill} strokeLinecap="round"/>
          <line x1="12.5" y1="13" x2="14.5" y2="13" stroke={fill} strokeLinecap="round"/>
          <line x1="12.5" y1="16" x2="14.5" y2="16" stroke={fill} strokeLinecap="round"/>
          <line x1="3.5" y1="11.5" x2="8.5" y2="11.5" stroke={fill} strokeLinecap="round"/>
          <line x1="3.5" y1="14.5" x2="8.5" y2="14.5" stroke={fill} strokeLinecap="round"/>
          <line x1="4.5" y1="17.5" x2="4.5" y2="20.5" stroke={fill} strokeLinecap="round"/>
          <line x1="7.5" y1="17.5" x2="4.5" y2="17.5" stroke={fill} strokeLinecap="round"/>
          <line x1="7.5" y1="20.5" x2="7.5" y2="17.5" stroke={fill} strokeLinecap="round"/>
      </svg>
    )
  }
}
