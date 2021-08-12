import React, { Component } from 'react'
import './FullLogo.css'

import LogoIcon     from '../IconComponents/LogoIconComponents/LogoIconComponent'
import LogoTextIcon from '../IconComponents/LogoIconComponents/LogoTextIconComponent'

interface FullLogoProps {
  logoClasses?: string,
  logoFirstColor: string,
  logoSecondColor: string,
  showLogo: boolean,

  logoTextClasses?: string,
  logoTextFirstColor: string,
  logoTextSecondColor: string,
  showLogoText: boolean
}

export default class FullLogo extends Component<FullLogoProps> {
  static displayName = FullLogo.name

  render () {
    const logoIcon = this.props.showLogo ?
                      <LogoIcon
                        classes={`def-logo ${this.props.logoClasses}`}
                        fillFirstColor={`${this.props.logoFirstColor}`}
                        fillSecondColor={`${this.props.logoSecondColor}`} />
                      :
                      <></>
    const logoTextIcon = this.props.showLogoText ? 
                          <LogoTextIcon
                            classes={`def-logo ${this.props.logoClasses}`}
                            fillFirstColor={`${this.props.logoTextFirstColor}`}
                            fillSecondColor={`${this.props.logoTextSecondColor}`} />
                          :
                          <></>
    return (
      <a href="/">
        <div className="full-logo">
          {logoIcon}
          {logoTextIcon}
        </div>
      </a>
    )
  }
}
