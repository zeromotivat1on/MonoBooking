import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/LayoutComponent/Layout'

import Welcome        from './pages/WelcomePage/Welcome'
import SpecificOffer  from './pages/SpecificOffer/SpecificOffer'
import CreateOffer    from './pages/CreateOfferPage/CreateOffer'
import CompanyProfile from './pages/CompanyProfilePage/CompanyProfile'
import CreateCompany  from './pages/CreateCompanyPage/CreateCompany'
import CreateCategory from './pages/CreateCategoryPage/CreateCategory'
import UpdateCompany  from './pages/UpdateCompanyPage/UpdateCompany'
import CompanyAll     from './pages/CompanyAllPage/CompanyAll'
import CreateRecord   from './pages/CreateRecordPage/CreateRecord'
import OfferProfile from './pages/OfferProfilePage/OfferProfile'
import CreateProperty from './pages/CreatePropertyPage/CreateProperty'

// Initial 'clear' and variables
import './initial.css'

// Default classes for all components
import './defaults.css'

export default class App extends Component {
  static displayName = App.name

  render () {
    return (
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/create-offer' render={ () => { return (<Layout> <CreateOffer /> </Layout>) } } />
        <Route exact path='/create-company' render={() => { return (<Layout> <CreateCompany /> </Layout>) }} />
        <Route exact path='/create-category' render={() => { return (<Layout> <CreateCategory /> </Layout>) } } />
        <Route exact path='/create-property' render={() => { return (<Layout> <CreateProperty /> </Layout>) }} />
        <Route exact path='/create-company' render={ () => { return (<Layout> <CreateCompany /> </Layout>) } } />
        <Route exact path='/update-company/:id' render={ () => { return (<Layout> <UpdateCompany /> </Layout>) } } />
        <Route exact path='/create-record' render={ () => { return (<Layout> <CreateRecord /> </Layout>) } } />
        <Route exact path='/company-profile/:id' render={ () => { return (<Layout> <CompanyProfile /> </Layout>) } } />
        <Route exact path='/companies' render={ () => { return (<Layout> <CompanyAll /> </Layout>) } } />
        <Route exact path='/offer-profile/:id' render={ () => { return (<Layout> <OfferProfile /> </Layout>) } } />
        <Route exact path='/offer' render={ () => { return (<Layout> <SpecificOffer /> </Layout>) } } />
      </Switch>
    )
  }
}
