import React, { Component, FormEvent } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import apiUrl from '../../apiUrl.json';
import './CreateCompany.css';

import ICreateCompany from '../../common/interfaces/Company/ICreateCompany';
import HttpService from '../../common/services/HttpService';
import getCurrentDate from '../../common/GetCurrentDate';

export default class CreateCompany extends Component {
  static displayName = CreateCompany.name;

  httpService = new HttpService();

  company: ICreateCompany = {
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
    company: this.company
  };

  getFormFields() {
    const inputs = document.querySelectorAll('#create-company-form input');
    const descr = document.getElementById('description');

    const formFields = [];
    inputs.forEach(el => formFields.push(el));
    formFields.push(descr);

    return formFields;
  }

  lockSubmitButton() {
    const sumbit = document.getElementById('submit') as HTMLButtonElement;
    sumbit.classList.add('locked');
  }

  unlockSubmitButton() {
    const sumbit = document.getElementById('submit') as HTMLButtonElement;
    sumbit.classList.remove('locked');
  }

  invalidField(field: HTMLInputElement | HTMLTextAreaElement) {
    field.classList.add('error');
    this.lockSubmitButton();
  }

  correctField(field: HTMLInputElement | HTMLTextAreaElement) {
    field.classList.remove('error');
    this.unlockSubmitButton();
  }

  validateName(field: HTMLInputElement | HTMLTextAreaElement) {
    if ((field.value.length < 4 || field.value.length > 64) && field.value.length !== 0) { this.invalidField(field); }
    else { this.correctField(field); }
  }

  validateOwner(field: HTMLInputElement | HTMLTextAreaElement) {
    if ((field.value.length < 4 || field.value.length > 64) && field.value.length !== 0) { this.invalidField(field); }
    else { this.correctField(field); }
  }

  validateDescription(field: HTMLInputElement | HTMLTextAreaElement) {
    if ((field.value.length < 10 || field.value.length > 200) && field.value.length !== 0) { this.invalidField(field); }
    else { this.correctField(field); }
  }

  validateDaysOnSite(field: HTMLInputElement | HTMLTextAreaElement) {
    if (Number(field.value) < 0 || Number(field.value) > 100000) { this.invalidField(field); }
    else { this.correctField(field); }
  }

  processDeleted() {
    this.setState({
      company: {
        ...this.state.company,
        deleted: !this.state.company.deleted
      }
    });
  }

  processStatus(field: HTMLInputElement | HTMLTextAreaElement) {
    this.setState({
      company: {
        ...this.state.company,
        status: parseInt(field.value)
      }
    });
  }

  processField(field: HTMLInputElement | HTMLTextAreaElement) {
    switch (field.name) {
      case 'name':
        this.validateName(field); break;
      case 'owner':
        this.validateOwner(field); break;
      case 'description':
        this.validateDescription(field); break;
      case 'daysOnSite':
        this.validateDaysOnSite(field); break;
      case 'deleted':
        this.processDeleted(); break;
      case 'status':
        this.processStatus(field); break;
    }
  }

  formChangeHandler(e: any) {
    let field = (document.getElementById(`${e.target.name}`) as HTMLInputElement | HTMLTextAreaElement);

    this.setState({
      company: {
        ...this.state.company,
        [field.name]: field.value
      }
    });

    this.processField(field);
    this.tryLockSubmitButton();
  }

  tryLockSubmitButton() {
    let fields = this.getFormFields();
    for (let i = 0; i < fields.length; i++) {
      if (fields[i]?.classList.contains('error')) {
        this.lockSubmitButton();
        break;
      }
    }
  }

  async submitForm(e: FormEvent) {
    e.preventDefault();
    let response = await this.httpService.post(this.state.company, apiUrl.Company);
    console.log(response);
  }

  render() {
    return (
      <main id='create-company-page' className='def-page'>
        <Form onSubmit={(e) => this.submitForm(e)} id='create-company-form'>
          <FormGroup>
            <Label for='name'>Company Name</Label>
            <Input required type='text' name='name' id='name' onChange={(e) => this.formChangeHandler(e)} />
          </FormGroup>
          <FormGroup>
            <Label for='owner'>Owner</Label>
            <Input required type='text' name='owner' id='owner' onChange={(e) => this.formChangeHandler(e)} />
          </FormGroup>
          <FormGroup>
            <Label for='description'>Description</Label>
            <Input required type='textarea' rows={5} name='description' id='description' onChange={(e) => this.formChangeHandler(e)} />
          </FormGroup>
          <FormGroup>
            <Label for='daysOnSite'>Days On Site</Label>
            <Input type='number' name='daysOnSite' id='daysOnSite' onChange={(e) => this.formChangeHandler(e)} />
          </FormGroup>
          <FormGroup>
            <Label for='foundationDate'>Foundation Date</Label>
            <Input type='date' name='foundationDate' id='foundationDate'
              max={getCurrentDate()}
              onChange={(e) => this.formChangeHandler(e)} />
          </FormGroup>
          <FormGroup>
            <Label for='lastModifiedDate'>Last Modified Date</Label>
            <Input type='date' name='lastModifiedDate' id='lastModifiedDate'
              max={getCurrentDate()}
              onChange={(e) => this.formChangeHandler(e)} />
          </FormGroup>
          <FormGroup>
            <Label for='status'>Status</Label>
            <Input type='select' name='status' id='status'
              onChange={(e) => this.formChangeHandler(e)}>
              <option value="0">Inactive</option>
              <option value="1">Active</option>
            </Input>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' name='deleted' id='deleted' onChange={(e) => this.formChangeHandler(e)} />{' '}
              Deleted
            </Label>
          </FormGroup>
          <div className="final-buttons">
            <Button id="reset" type="reset">Clear</Button>
            <Button id="submit">Submit</Button>
          </div>
        </Form>
      </main>
    );
  }
}