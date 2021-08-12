import React, { Component } from 'react'
import './Welcome.css'

import Button from '../../components/ButtonComponent/Button'

import FullLogo from '../../components/FullLogoComponent/FullLogo'

import { newWindowLocationHref } from '../../common/windowModifications'

export default class Welcome extends Component {
  static displayName = Welcome.name

  render () {
    return (
      <main id="welcome-page" className="def-page">
        <div className="alt-clr-circle"></div>
        <div className="top-bar">
          <FullLogo
              showLogo={true}
              logoFirstColor="var(--clr-def-white)"
              logoSecondColor="var(--clr-def-black)"

              showLogoText={true}
              logoTextFirstColor="var(--clr-def-black)"
              logoTextSecondColor="var(--clr-def-white)" />
          <Button 
            buttonText="continue as guest" 
            buttonClasses="continue-as-guest-btn"
            buttonFunc={ () => newWindowLocationHref('/main') } />
        </div>
        <div className="slogan">
          <div className="slogan-part slogan-white-part">
            <span>Book</span>
            <span>Whatever</span>
            <span>Like</span>
          </div>
          <div className="slogan-part slogan-black-part">
            <span>literally everything</span>
            <span>whenever and wherever</span>
            <span>you desire</span>
          </div>
        </div>
        <div className="links--join-us">
            <div className="links-part">
              <ul className="links-list">
                <li className="links-list-item"><a href="/privacy-policy" className="def-link links-list-link">privacy &amp; policy</a></li>
                <li className="links-list-item"><a href="/help-center" className="def-link links-list-link">help center</a></li>
                <li className="links-list-item"><a href="/contacts" className="def-link links-list-link">contacts</a></li>
              </ul>
            </div>
            <div className="join-us-part">
              <span className="join-us-part-text">
                Join the biggest community of booking service
                and order things that will change your life                
              </span>
              <Button 
                buttonText="join us now" 
                buttonClasses="join-us-btn" 
                buttonFunc={ () => newWindowLocationHref('/login') } />
            </div>
        </div>
      </main>
    )
  }
}