import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

import apiUrl from '../../apiUrl.json';
import './OfferProfile.css';

import HttpService    from '../../common/services/HttpService';
import IGetOffer from '../../common/interfaces/Offer/IGetOffer';

export default class OfferProfile extends Component {
  static displayName = OfferProfile.name;

  httpService = new HttpService();
  lastPartOfUrl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

  offer: IGetOffer = {
    id: 0,
    description: "",
    title : "",
    slotPrice: 0,
    slotTime: "0",
    image: "",
    mark: 0,
    status: 0,
    };

  state = {
    offer: this.offer,
    isLoading: true
  };

  async componentDidMount() {
    let response = await this.httpService.get(`${apiUrl.Offer}/${this.lastPartOfUrl}`);
    this.setState({
      offer: response,
      isLoading: false
    })

    console.log('offer state', this.state.offer);
  }

  async deleteOffer() {
    let response = await this.httpService.delete(`${apiUrl.Offer}/${this.lastPartOfUrl}`);
    console.log(response);
  }

  render() {
    return (
      <main id='offer-profile-page' className='def-page'>
        { this.state.isLoading ? (
          <h2>Loading your request...</h2> 
          ) :
            this.state.offer.id > 0 ? (
              <div className="offer-table-table-box">
                <Table>
                  <tbody>
                    <tr>
                      <th>Id</th>
                      <td>{this.state.offer.id}</td>
                    </tr>
                    <tr>
                      <th>Description</th>
                      <td>{this.state.offer.description}</td>
                    </tr>
                    <tr>
                      <th>Title</th>
                      <td>{this.state.offer.title}</td>
                    </tr>
                    <tr>
                      <th>Slot Price</th>
                      <td>{this.state.offer.slotPrice}</td>
                    </tr>
                    <tr>
                      <th>Slot Time</th>
                      <td>{this.state.offer.slotTime}</td>
                    </tr>
                    <tr>
                      <th>Image Link</th>
                      <td>{this.state.offer.image}</td>
                    </tr>
                    <tr>
                      <th>Mark</th>
                      <td>{this.state.offer.mark}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>{this.state.offer.status}</td>
                    </tr>
                  </tbody>
                </Table>
                <Button className="delete-btn" onClick={() => this.deleteOffer()}>
                  Delete Offer
                </Button>
              </div>
            )
            : <h2>Offer Not Found 404</h2> }
      </main>
    );
  }
}