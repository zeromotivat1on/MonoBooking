import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import HttpService from '../../common/services/HttpService';
import ICreateRecord from '../../common/interfaces/ICreateRecord';
import * as Yup from 'yup'

import getCurrentDate from '../../common/GetCurrentDate';
import getCurrentTime from '../../common/GetCurrentTime';
import { FormGroup, Label } from 'reactstrap';


export default class CreateRecord extends Component {
    static displayName = CreateRecord.name;

    httpService = new HttpService();
    endPoint :string  = '/api/records'; 
    createRecord: ICreateRecord = {
        date: getCurrentDate(),
        time: getCurrentTime(),
        status: 0,
        lastDate: getCurrentDate(),
        lastTime: getCurrentTime(),
        LastModifiedDate: getCurrentDate() + "T" + getCurrentTime()
    };

    recordSchema = Yup.object().shape({
        date: Yup.string().required(),
        time: Yup.string().required(),
    });

    dataFormatting(record: ICreateRecord) {
      record.date = record.date + "T" + record.time;
      record.LastModifiedDate = record.lastDate + "T" + record.lastTime;

      this.submitFormik(record)
    }

    async submitFormik(record: ICreateRecord) {
      console.log(await this.httpService.post(record, this.endPoint));
    }

    render() {
      return (
          <main id="create-offer-page" className="def-page">
              <Formik 
                  initialValues={this.createRecord}
                  onSubmit={(values, actions) => {
                      values.status = Number(values.status);
                      actions.setSubmitting(true);
                      this.dataFormatting(values);
                      actions.setSubmitting(false);
                  }}
                  validationSchema={this.recordSchema}>
                  {({ errors, touched }) =>
                  (<Form id="create-offer-form">

                      <FormGroup>
                        <Label>Date <br />
                          <Field type='date' name='date'
                              min={getCurrentDate()}
                          />
                        </Label>
                      </FormGroup>

                      <FormGroup>
                        <Field type='time' name='time' / >
                      </FormGroup>
                        
                      <label className="label-field">Status
                          <Field name="status" component="select">
                              <option value={0}>Booked</option>
                              <option value={1}>Paid</option>
                              <option value={2}>Declined</option>
                          </Field>
                      </label>

                      <FormGroup>
                        <Label>Last Modified Date <br />
                          <Field type='date' name='lastDate'
                              min={getCurrentDate()}
                          />
                        </Label>
                      </FormGroup>

                      <FormGroup>
                        <Field type='time' name='lastTime' / >
                      </FormGroup>
                      
                      <button type="submit">Submit</button>
                  </Form>)}
              </Formik>
          </main>
      )
  }
};