import React, { Component } from 'react'
import IDefIcon from '../../../common/interfaces/IDefIcon'

export default class CloseHeaderMenuIcon extends Component<IDefIcon> {
  static displayName = CloseHeaderMenuIcon.name

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
        viewBox="0 0 33 16" >
          <path fill={fill} d="M32.5821 7.29289C32.9726 7.68342 32.9726 8.31658 32.5821 8.70711L26.2181 15.0711C25.8276 15.4616 25.1945 15.4616 24.8039 15.0711C24.4134 14.6805 24.4134 14.0474 24.8039 13.6569L30.4608 8L24.8039 2.34315C24.4134 1.95262 24.4134 1.31946 24.8039 0.928932C25.1945 0.538408 25.8276 0.538408 26.2181 0.928932L32.5821 7.29289ZM1.875 9C1.32272 9 0.875 8.55228 0.875 8C0.875 7.44772 1.32272 7 1.875 7V9ZM31.875 9H1.875V7H31.875V9Z"/>
      </svg>
    )
  }
}
