import React, { Component, FC } from 'react';
import { Formik, Form, Field, FieldProps} from 'formik';
import './CreateProperty.css';
import HttpService from '../../common/services/HttpService';
import ICreateProperty from '../../common/interfaces/ICreateProperty';
import * as Yup from 'yup'
interface CustomInputComponent {
    type?: string;
}

const DateInputComponent: FC<CustomInputComponent & FieldProps> = ({
    field,
    form: { },
    type = "date",
    ...props
}) => (
    <div>
        <input type={type} {...field} {...props} />
    </div>
);

const NameInvalid = "You must specify name";
const ValueInvalid = "You must specify value";


export default class CreateProperty extends Component {
    static displayName = CreateProperty.name;

    httpService = new HttpService();
    endPoint :string  = '/api/property'; 
    createProperty: ICreateProperty = {
        Name: "",
        ValueType: 0,
        Value: "",
        Status: 0,
        IsDeleted: false,
        CreationDate: undefined,
        LastModifiedDate: undefined
    };
    propertySchema = Yup.object().shape({
        Name: Yup.string()
            .min(1)
            .max(64)
            .required()
            .typeError(NameInvalid),
        Value: Yup.string()
            .min(1)
            .max(2048)
            .required()
            .typeError(ValueInvalid)
    });

    async submitFormik(property: ICreateProperty) {
        console.log(await this.httpService.post(property, this.endPoint));
    }

    render() {
        return (
            <main id="create-property-page" className="def-page">
                <Formik 
                    initialValues={this.createProperty}
                    onSubmit={(values, actions) => {
                        values.ValueType = Number(values.ValueType);
                        values.Status = Number(values.Status);

                        actions.setSubmitting(true);
                        this.submitFormik(values);
                        actions.setSubmitting(false);
                    }}
                    validationSchema={this.propertySchema}>
                    {({ errors, touched }) =>
                    (<Form id="create-property-form">
                        <label className="label-field">Name
                            <Field name="Name" />
                            {errors.Name && touched.Name? (
                                <div className="yup-error">{errors.Name}</div>
                            ) : null}
                        </label>
                        <label className="label-field">ValueType
                            <Field name="ValueType" component="select">
                                <option value={0}>Bool</option>
                                <option value={1}>Number</option>
                                <option value={2}>Decimal</option>
                                <option value={3}>String</option>
                                <option value={4}>Picture</option>
                            </Field>
                        </label>
                        <label className="label-field">Value
                            <Field name="Value"/>
                            {errors.Value && touched.Value ? (
                                <div className="yup-error">{errors.Value}</div>
                                ) : null}
                        </label>
                        <label className="label-field">Status
                            <Field name="Status" component="select">
                                <option value={0}>In developing</option>
                                <option value={1}>Need to approve</option>
                                <option value={2}>Active</option>
                                <option value={3}>Disabled</option>
                            </Field>
                        </label>
                        <label className="label-field">Is Deleted
                            <Field type="checkbox" name="IsDeleted" />
                        </label>
                        <label className="label-field">Creation date
                            <Field name="CreationDate" component={DateInputComponent}></Field>
                        </label>
                        <label className="label-field">Last Modified Date
                            <Field name="LastModifiedDate" component={DateInputComponent}></Field>
                        </label>
                        <button type="submit">Submit</button>
                    </Form>)}
                </Formik>
            </main>
        )
    }
};