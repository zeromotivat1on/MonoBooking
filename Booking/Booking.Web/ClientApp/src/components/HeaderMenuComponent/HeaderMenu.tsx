import React, { Component } from 'react'
import './HeaderMenu.css'

import Button from '../ButtonComponent/Button'

import CloseHeaderMenuIcon  from '../IconComponents/ButtonIconComponents/CloseHeaderMenuIcon'
import CatalogIcon          from '../IconComponents/ButtonIconComponents/CatalogIcon'
import BookingsIcon         from '../IconComponents/ButtonIconComponents/BookingsIcon'
import CopmaniesIcon        from '../IconComponents/ButtonIconComponents/CompaniesIcon'
import UsersIcon            from '../IconComponents/ButtonIconComponents/UsersIcon'
import ProfileIcon          from '../IconComponents/ButtonIconComponents/ProfileIcon'
import SearchIcon           from '../IconComponents/ButtonIconComponents/SearchIcon'
import FilterIcon           from '../IconComponents/ButtonIconComponents/FilterIcon'
import AboutUsIcon          from '../IconComponents/ButtonIconComponents/AboutUsIcon'
import SignOutIcon          from '../IconComponents/ButtonIconComponents/SignOutIcon'

import { newWindowLocationHref } from '../../common/windowModifications'

interface HeaderMenuProps {
  switchHeaderMenu: () => void
}

export default class HeaderMenu extends Component<HeaderMenuProps> {
  static displayName = HeaderMenu.name

  render () {
    return (
      <div className="header-menu">
        <div className="top-menu-part">
          <a href="/"><h2 className="top-menu-service-name">monobooking</h2></a>
          <Button
            buttonClasses="header-menu-close-btn"
            buttonInnerIcon={<CloseHeaderMenuIcon
                              classes="def-btn-inner-icon header-menu-inner-icon"/>}
            buttonFunc={ () => this.props.switchHeaderMenu() } />
        </div>
        <div className="buttons-from-header">
          <Button
              buttonClasses="header-menu-inner-btn"
              buttonText="Catalog"
              buttonInnerIcon={<CatalogIcon
                                classes="def-btn-inner-icon header-menu-inner-icon"/>}
              buttonFunc={ () => newWindowLocationHref('/main') } />
          <Button
              buttonClasses="header-menu-inner-btn"
              buttonText="Bookings"
              buttonInnerIcon={<BookingsIcon
                                classes="def-btn-inner-icon header-menu-inner-icon"/>}
              buttonFunc={ () => newWindowLocationHref('/my-bookings') } />
          <Button
              buttonClasses="header-menu-inner-btn"
              buttonText="Companies"
              buttonInnerIcon={<CopmaniesIcon
                                classes="def-btn-inner-icon header-menu-inner-icon"/>}
              buttonFunc={ () => newWindowLocationHref('/main') } />
        </div>
        <div className="user-buttons">
          <Button
              buttonClasses="header-menu-inner-btn"
              buttonText="Users"
              buttonInnerIcon={<UsersIcon
                                classes="def-btn-inner-icon header-menu-inner-icon"/>}
              buttonFunc={ () => newWindowLocationHref('/main') } />
          <Button
              buttonClasses="header-menu-inner-btn"
              buttonText="Profile"
              buttonInnerIcon={<ProfileIcon
                                classes="def-btn-inner-icon header-menu-inner-icon"/>}
              buttonFunc={ () => newWindowLocationHref('/user-profile') } />
        </div>
        <div className="utility-buttons">
          <Button
              buttonClasses="header-menu-inner-btn"
              buttonText="Search"
              buttonInnerIcon={<SearchIcon
                                classes="def-btn-inner-icon header-menu-inner-icon"/>}
              buttonFunc={ () => {/* search pop-up */} } />
          <Button
              buttonClasses="header-menu-inner-btn"
              buttonText="Filters"
              buttonInnerIcon={<FilterIcon
                                classes="def-btn-inner-icon header-menu-inner-icon"/>}
              buttonFunc={ () => {/* filters side-menu */} } />
          <Button
              buttonClasses="header-menu-inner-btn"
              buttonText="About Us"
              buttonInnerIcon={<AboutUsIcon
                                classes="def-btn-inner-icon header-menu-inner-icon"/>}
              buttonFunc={ () => newWindowLocationHref('/about-us') } />
        </div>
        <Button
              buttonClasses="header-menu-inner-btn"
              buttonText="Sign Out"
              buttonInnerIcon={<SignOutIcon
                                classes="def-btn-inner-icon header-menu-inner-icon"/>}
              buttonFunc={ () => newWindowLocationHref('/main') } />
      </div>
    )
  }
}
