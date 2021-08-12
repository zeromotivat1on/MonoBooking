import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class SignOutIcon extends Component<IDefIcon> {
  static displayName = SignOutIcon.name

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
          <path d="M8.82609 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H8.82609" stroke={fill} strokeLinecap="round"/>
          <path d="M16.3536 11.3536C16.5488 11.1583 16.5488 10.8417 16.3536 10.6464L13.1716 7.46447C12.9763 7.2692 12.6597 7.2692 12.4645 7.46447C12.2692 7.65973 12.2692 7.97631 12.4645 8.17157L15.2929 11L12.4645 13.8284C12.2692 14.0237 12.2692 14.3403 12.4645 14.5355C12.6597 14.7308 12.9763 14.7308 13.1716 14.5355L16.3536 11.3536ZM6 10.5C5.72386 10.5 5.5 10.7239 5.5 11C5.5 11.2761 5.72386 11.5 6 11.5V10.5ZM16 10.5L6 10.5V11.5L16 11.5V10.5Z" fill={fill}/>
      </svg>
    )
  }
}
