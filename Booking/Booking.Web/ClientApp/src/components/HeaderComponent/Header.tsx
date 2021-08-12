import React, { Component } from 'react'
import './Header.css'

import FullLogo       from '../FullLogoComponent/FullLogo'
import TextInput      from '../TextInputComponent/TextInput'
import Button         from '../ButtonComponent/Button'
import HeaderMenu     from '../HeaderMenuComponent/HeaderMenu'
import HeaderMenuIcon from '../IconComponents/ButtonIconComponents/HeaderMenuIcon'

import { newWindowLocationHref }  from '../../common/windowModifications'

interface HeaderProps {
  isLoggedIn?: boolean
}
interface HeaderState {
  showHeaderMenu: boolean
}

export default class Header extends Component<HeaderProps, HeaderState> {
  static displayName = Header.name
  
  state = {
    showHeaderMenu: false 
  }
  
  switchHeaderMenu() {
    this.setState({
      showHeaderMenu: !this.state.showHeaderMenu
    })
  }

  render () {
    let headerButton = this.props.isLoggedIn ?
                          <Button
                            buttonText="profile"
                            buttonClasses="header-btn"
                            buttonFunc = { () => newWindowLocationHref('/profile') } />
                          :
                          <Button
                            buttonText="join"
                            buttonClasses="header-btn"
                            buttonFunc = { () => newWindowLocationHref('/login') } />

    return (
      <>
        <header className="header">
          <div className="header-logo-search">
            <FullLogo 
              showLogo={true}
              logoClasses="header-logo"
              logoFirstColor="var(--clr-def-black)"
              logoSecondColor="var(--clr-def-white)"

              showLogoText={true}
              logoTextClasses="header-logo-text"
              logoTextFirstColor="var(--clr-def-white)"
              logoTextSecondColor="var(--clr-def-black)" />
            <TextInput
              type="text"
              inputClasses="header-input"
              inputContainerClasses="header-input-container"
              placeholder="Search anything" />
          </div>
          <div className="rest-header">
            <ul className="header-links-list">
              <li className="header-link"><a className="def-link" href="/main?entity=offers">Catalog</a></li>
              <li className="header-link"><a className="def-link" href="/main?entity=companies">Companies</a></li>
              <li className="header-link"><a className="def-link" href="/user-bookings">Bookings</a></li>
            </ul>
            {/* Depends on user loggedin status */}
            {headerButton}
            
            {/* Appears while smaller screen size, hidden on bigger */}
            <Button
              buttonClasses="header-menu-btn"
              buttonInnerIcon={<HeaderMenuIcon
                                classes="def-btn-inner-icon"/>}
              buttonFunc={ () => this.switchHeaderMenu() } />
          </div>
        </header>
            {
              (this.state.showHeaderMenu) ?
                <HeaderMenu
                  switchHeaderMenu={ () => this.switchHeaderMenu() }/>
                :
                <></>
            }
      </>
    )
  }
}