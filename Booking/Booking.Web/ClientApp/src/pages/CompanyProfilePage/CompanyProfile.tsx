import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

import apiUrl from '../../apiUrl.json';
import './CompanyProfile.css';

import HttpService    from '../../common/services/HttpService';
import IGetCompany from '../../common/interfaces/Company/IGetCompany';

export default class CompanyProfile extends Component {
  static displayName = CompanyProfile.name;

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

  state = {
    company: this.company,
    isLoading: true
  };

  async componentDidMount() {
    let response = await this.httpService.get(`${apiUrl.Company}/${this.lastPartOfUrl}`);
    this.setState({
      company: response,
      isLoading: false
    })

    console.log('company state', this.state.company);
  }

  async deleteCompany() {
    let response = await this.httpService.delete(`${apiUrl.Company}/${this.lastPartOfUrl}`);
    console.log(response);
  }

  render() {
    return (
      <main id='company-profile-page' className='def-page'>
        { this.state.isLoading ? (
          <h2>Loading your request...</h2> 
          ) :
            this.state.company.id > 0 ? (
              <div className="company-profile-table-box">
                <Table>
                  <tbody>
                    <tr>
                      <th>Id</th>
                      <td>{this.state.company.id}</td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>{this.state.company.name}</td>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td>{this.state.company.description}</td>
                    </tr>
                    <tr>
                      <th>Days On Site</th>
                      <td>{this.state.company.daysOnSite}</td>
                    </tr>
                    <tr>
                      <th>Owner</th>
                      <td>{this.state.company.owner}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>
                        {this.state.company.status === 0 ? 
                          `${this.state.company.status} - Inactive` : 
                          `${this.state.company.status} - Active`}
                      </td>
                    </tr>
                    <tr>
                      <th>Foundation Date</th>
                      <td>{this.state.company.foundationDate}</td>
                    </tr>
                    <tr>
                      <th>Last Modified Date</th>
                      <td>{this.state.company.lastModifiedDate}</td>
                    </tr>
                    <tr>
                      <th>Deleted</th>
                      <td>{this.state.company.deleted ? 'True' : 'False'}</td>
                    </tr>
                  </tbody>
                </Table>
                <Button className="delete-btn" onClick={() => this.deleteCompany()}>
                  Delete Company
                </Button>
              </div>
            )
            : <h2>Company Not Found 404</h2> }
      </main>
    );
  }
}