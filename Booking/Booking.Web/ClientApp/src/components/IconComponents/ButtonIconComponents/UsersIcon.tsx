import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class UsersIcon extends Component<IDefIcon> {
  static displayName = UsersIcon.name

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
          <path d="M8.3 12.4062C8.3 13.7029 7.26711 14.7484 6 14.7484C4.73289 14.7484 3.7 13.7029 3.7 12.4062C3.7 11.1095 4.73289 10.064 6 10.064C7.26711 10.064 8.3 11.1095 8.3 12.4062Z" stroke={fill} strokeWidth="0.4"/>
          <path d="M11 20.0002C11 15.2534 8.76142 14.9158 6 14.9158C3.23858 14.9158 1 15.2534 1 20.0002" stroke={fill} strokeWidth="0.4" strokeLinecap="round"/>
          <path d="M15.4166 6.77906C15.4166 8.14257 14.3307 9.24074 12.9999 9.24074C11.6692 9.24074 10.5833 8.14257 10.5833 6.77906C10.5833 5.41555 11.6692 4.31738 12.9999 4.31738C14.3307 4.31738 15.4166 5.41555 15.4166 6.77906Z" stroke={fill} strokeWidth="0.5"/>
          <path d="M16 13.7279C16 10.3581 15.2092 9.6604 13.0001 9.6604C10.791 9.6604 10 10.3581 10 13.7279" stroke={fill} strokeWidth="0.5" strokeLinecap="round"/>
          <path d="M7.83317 2.88116C7.83317 4.33827 6.67264 5.51231 5.24984 5.51231C3.82703 5.51231 2.6665 4.33827 2.6665 2.88116C2.6665 1.42405 3.82703 0.25 5.24984 0.25C6.67264 0.25 7.83317 1.42405 7.83317 2.88116Z" stroke={fill} strokeWidth="0.5"/>
          <path d="M9.5 10.0844C9.5 7.6976 7.59721 5.7627 5.25 5.7627C2.90279 5.7627 1 7.6976 1 10.0844" stroke={fill} strokeWidth="0.5" strokeLinecap="round"/>
      </svg>
    )
  }
}
