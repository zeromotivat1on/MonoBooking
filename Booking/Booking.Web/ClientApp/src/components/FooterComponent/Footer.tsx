import React, { Component } from 'react'
import './Footer.css'

import FullLogo from '../FullLogoComponent/FullLogo'
import Button   from '../ButtonComponent/Button'

import CopyrightIcon from '../IconComponents/UtilityIconComponents/CopyrightIconComponent'

import {socialLinks } from '../../common/socialLinks'
import SocialWidget   from '../SocialWidgetComponent/SocialWidget'

import { newWindowLocationHref } from '../../common/windowModifications'

interface FooterProps {
  isLoggedIn: boolean
}

export default class Footer extends Component<FooterProps> {
  static displayName = Footer.name

  render () {
    let footerButton = this.props.isLoggedIn ?
                          <Button
                            buttonText="profile"
                            buttonClasses="footer-btn"
                            buttonFunc = { () => newWindowLocationHref('/profile') } />
                          :
                          <Button
                            buttonText="join"
                            buttonClasses="footer-btn"
                            buttonFunc = { () => newWindowLocationHref('/login') } />

    return (
      <footer className="footer">
        <div className="footer-top-part">
         <FullLogo
            showLogo={true}
            logoClasses="footer-logo"
            logoFirstColor="var(--clr-def-white)"
            logoSecondColor="var(--clr-def-black)"

            showLogoText={true}
            logoTextClasses="footer-logo-text"
            logoTextFirstColor="var(--clr-def-black)"
            logoTextSecondColor="var(--clr-def-white)" />
          {footerButton}
        </div>
        <SocialWidget
          socialLinks={socialLinks} />
        <div className="footer-rest-part">
          <ul className="footer-links">
            <li><a href="/main" className="def-link footer-link">main page</a></li>
            <li><a href="/privacy-policy" className="def-link footer-link">privacy &amp; policy</a></li>
            <li><a href="/help-center" className="def-link footer-link">help center</a></li>
            <li><a href="/team" className="def-link footer-link">team</a></li>
          </ul>
          <span className="copyright">
            <CopyrightIcon
              classes="copyright-icon"/>
            2021
            MONOBOOKING INC.
            All Rights Reserved.
          </span>
        </div>
      </footer>
    )
  }
}
