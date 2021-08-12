import React, { Component } from 'react';
import { Table } from 'reactstrap';

import apiUrl from '../../apiUrl.json';
import './CompanyAll.css';

import HttpService    from '../../common/services/HttpService';
import IGetCompany from '../../common/interfaces/Company/IGetCompany';

export default class CompanyAll extends Component {
  static displayName = CompanyAll.name;

  httpService = new HttpService();
  lastPartOfUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

  company: IGetCompany = {
    id: 0,
    name: '',
    description: '',
    daysOnSite: 0,
    owner: '',
    status: 0,
    foundationDate: undefined,
    deleted: false,
    lastModifiedDate: undefined
  };

  companyArr: Array<IGetCompany> = [this.company]

  state = {
    companyArr: this.companyArr,
    isLoading: true
  };

  async componentDidMount() {
    let response = await this.httpService.get(`${apiUrl.Company}`);;
    console.log(response);
    this.setState({
      companyArr: response,
      isLoading: false
    })

    console.log('state', this.state);
  }

  async deleteCompany() {
    let response = await this.httpService.delete(`${apiUrl.Company}/${this.lastPartOfUrl}`);
    console.log(response);
  }

  render() {
    return (
      <main id='company-all-page' className='def-page'>
        { this.state.isLoading ? (
          <h2>Loading your request...</h2> 
          ) :
            this.state.companyArr[0].id > 0 ? (
              <div className="company-profile-table-box">
                <Table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Days On Site</th>
                      <th>Owner</th>
                      <th>Status</th>
                      <th>Foundation Date</th>
                      <th>Last Modified Date</th>
                      <th>Deleted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.companyArr.map(el => {
                      return (
                        <tr key={el.id}>
                          <td>{el.id}</td>
                          <td>{el.name}</td>
                          <td>{el.description}</td>
                          <td>{el.daysOnSite}</td>
                          <td>{el.owner}</td>
                          <td>{el.status}</td>
                          <td>{el.foundationDate}</td>
                          <td>{el.lastModifiedDate}</td>
                          <td>{el.deleted.toString()}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </div>
            )
            : <h2>No Companies Found</h2> }
      </main>
    );
  }
}