import React, { Component } from 'react'

interface LogoIconProps {
  classes?: string,
  fillFirstColor: string,
  fillSecondColor: string
}

export default class LogoIcon extends Component<LogoIconProps> {
  static displayName = LogoIcon.name

  render () {
    return (
      <svg
        className={`${this.props.classes}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128" >
          <path d="M1 20C1 9.50659 9.50659 1 20 1H63V127H20C9.50659 127 1 118.493 1 108V20Z" fill={`${this.props.fillFirstColor}`} stroke={`${this.props.fillFirstColor}`} strokeWidth="2"/>
          <path d="M127 20C127 9.50659 118.493 1 108 1H65V127H108C118.493 127 127 118.493 127 108V20Z" fill={`${this.props.fillSecondColor}`} stroke={`${this.props.fillFirstColor}`} strokeWidth="2"/>
          <rect x="61" y="2" width="3" height="124" fill={`${this.props.fillFirstColor}`}/>
          <rect x="64" y="2" width="3" height="124" fill={`${this.props.fillSecondColor}`}/>
          <path d="M24 43.3942C24 42.3302 25.4411 42.0023 25.9015 42.9615L48 89H26C24.8954 89 24 88.1046 24 87V43.3942Z" fill={`${this.props.fillSecondColor}`}/>
          <path d="M68 43.3942C68 42.3302 66.5589 42.0023 66.0985 42.9615L44 89H68V43.3942Z" fill={`${this.props.fillSecondColor}`}/>
          <path d="M101.964 53.5C101.964 60.4013 94.9241 63.9964 86.2399 63.9964C77.5558 63.9964 68 52.4037 68 45.5023C68 38.601 82.7177 39.0044 86.2399 39.0044C94.9241 39.0044 101.964 46.5987 101.964 53.5Z" fill={`${this.props.fillFirstColor}`}/>
          <path d="M102 76.4879C102 69.5866 94.9601 63.9919 86.2759 63.9919C77.5918 63.9919 68.036 80.4822 68.036 84.9807C68.036 89.4793 77.5918 88.9839 86.2759 88.9839C94.9601 88.9839 102 83.3892 102 76.4879Z" fill={`${this.props.fillFirstColor}`}/>
      </svg>
    )
  }
}
