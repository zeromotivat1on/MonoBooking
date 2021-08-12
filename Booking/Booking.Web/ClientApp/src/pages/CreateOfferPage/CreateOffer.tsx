import React, { Component, FC } from 'react';
import { Formik, Form, Field, FieldProps} from 'formik';
import './CreateOffer.css';
import HttpService from '../../common/services/HttpService';
import ICreateOffer from '../../common/interfaces/Offer/ICreateOffer';
import ConstRegex from '../../common/regex/ConstRegex';
import * as Yup from 'yup'

interface CustomInputComponent {
    type?: string;
}

const TimeInputComponent: FC<CustomInputComponent & FieldProps> = ({
    field,
    form: {},
    type = "time",
    ...props
  }) => (
    <div>
      <input type={type} {...field} {...props}/>
    </div>
);

const slotPriceMessageMoreThan = "Slot price must be greater than 0";
const slotPriceMessageLessThan = "Slot price must be less than 1000000";
const DefaultNumberTypeError = "You must specify a number";
const ImageInvalid = "Not valid Link";


export default class CreateOffer extends Component {
    static displayName = CreateOffer.name;

    httpService = new HttpService();
    endPoint :string  = '/api/offers'; 
    createOffer: ICreateOffer = {
        title: "",
        description: "",
        slotPrice: 0,
        slotTime: "00:00",
        status: 0,
        image: "",
        mark: 0
    };
    offerSchema = Yup.object().shape({
        title: Yup.string()
            .min(4)
            .max(32)
            .required(),
        description: Yup.string()
            .min(4)
            .max(2048)
            .required(),
        slotPrice: Yup.number()
            .moreThan(0, slotPriceMessageMoreThan)
            .lessThan(1000000, slotPriceMessageLessThan)
            .typeError(DefaultNumberTypeError),
        mark: Yup.number()
            .min(0)
            .max(10)
            .typeError(DefaultNumberTypeError),
        image: Yup.string()
            .required()
            .matches(ConstRegex.urlRegex, ImageInvalid)
    });

    async submitFormik(offer: ICreateOffer) {
        console.log(await this.httpService.post<ICreateOffer>(offer, this.endPoint));
    }

    render() {
        return (
            <main id="create-offer-page" className="def-page">
                <Formik 
                    initialValues={this.createOffer}
                    onSubmit={(values, actions) => {
                        values.status = Number(values.status);

                        actions.setSubmitting(true);
                        this.submitFormik(values);
                        actions.setSubmitting(false);
                    }}
                    validationSchema={this.offerSchema}>
                    {({ errors, touched }) =>
                    (<Form id="create-offer-form">
                        <label className="label-field">Title
                            <Field name="title" />
                            {errors.title && touched.title? (
                                <div className="yup-error">{errors.title}</div>
                            ) : null}
                        </label>
                        <label className="label-field">Description
                            <Field name="description"/>
                            {errors.description && touched.description ? (
                                <div className="yup-error">{errors.description}</div>
                                ) : null}
                        </label>
                        <label className="label-field">Slot price
                            <Field name="slotPrice" type="number"/>
                            {errors.slotPrice && touched.slotPrice ? (
                                <div className="yup-error">{errors.slotPrice}</div>
                                ) : null}
                        </label>
                        <label className="label-field">Status
                            <Field name="status" component="select">
                                <option value={0}>In developing</option>
                                <option value={1}>Need to approve</option>
                                <option value={2}>Active</option>
                            </Field>
                        </label>
                        <label className="label-field">Mark
                            <Field name="mark" type="number"/>
                            {errors.mark && touched.mark ? (
                                <div className="yup-error">{errors.mark}</div>
                                ) : null}
                        </label>
                        <label className="label-field">Slot time
                            <Field name="slotTime" component={TimeInputComponent}></Field>
                        </label>
                        <label className="label-field">Link to image
                            <Field name="image" />
                            {errors.image && touched.image ? (
                                <div className="yup-error">{errors.image}</div>
                            ) : null}
                        </label>
                        <button type="submit">Submit</button>
                    </Form>)}
                </Formik>
            </main>
        )
    }
};