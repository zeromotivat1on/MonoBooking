import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class SearchIcon extends Component<IDefIcon> {
  static displayName = SearchIcon.name

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
        viewBox="0 0 16 20" >
          <line x1="0.880907" y1="19.303" x2="5.43471" y2="12.8723" stroke={fill} strokeLinecap="round"/>
          <circle cx="9" cy="7" r="6.5" stroke={fill}/>
      </svg>
    )
  }
}
