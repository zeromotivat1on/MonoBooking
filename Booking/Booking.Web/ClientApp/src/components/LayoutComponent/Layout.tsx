import React, { Component } from 'react';
import './Layout.css'

import Header from '../HeaderComponent/Header';
import Footer from '../FooterComponent/Footer';

function isLoggedIn() {
  return false
}
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <>
        <div className="menu-btn-effect"></div>
        <Header isLoggedIn={ isLoggedIn() } />
        {this.props.children}
        <Footer isLoggedIn={ isLoggedIn() }/>
      </>
    );
  }
}
