import React, { Component, FC } from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';

import './CreateCategory.css';

import ICreateCategory from '../../common/interfaces/ICreateCategory';
import HttpService from '../../common/services/HttpService';
import getCurrentDate from '../../common/GetCurrentDate';

import * as Yup from 'yup'

interface CustomInputComponent
{
    type?: string;
}

const TimeInputComponent: FC<CustomInputComponent & FieldProps> = ({
    field,
    form: { },
    type = "datetime",
    ...props
  }) => (
    <div>
        <input type={type} {...field} {...props}/>
    </div>
);

const DefaultNumberTypeError = "You must specify a number";

export default class CreateCategory extends Component
{
    static displayName = CreateCategory.name;

    httpService = new HttpService();

    endPoint: string = '/api/categories';

    category: ICreateCategory =
    {
            title: '',
            description: '',
            createdAt: '',
            isDeleted: false
        };
    categorySchema = Yup.object().shape({
        title: Yup.string()
            .min(3)
            .max(64)
            .required(),
        description: Yup.string().
            min(4).
            max(2048).
            required()
    });

    async submitFormik(category: ICreateCategory)
    {
        console.log(await this.httpService.post(category, this.endPoint));
    }

    render() {
        return (
            <main id="create-category-page" className="def-page">
                <Formik
                    initialValues={this.category}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(true);
                        this.submitFormik(values);
                        actions.setSubmitting(false);
                    }}
                    validationSchema={this.categorySchema}
                >
                    {({ errors, touched }) =>
                        (
                        <Form id="create-category-form">

                            <label className="label-field">Title
                                <Field name="title" />
                                {errors.title && touched.title ? (
                                    <div className="yup-error">{errors.title}</div>
                                ) : null}
                            </label>

                            <label className="label-field">Descriprion
                                <Field name="description" />
                                {errors.description && touched.description ? (
                                    <div className="yup-error">{errors.description}</div>
                                ) : null}
                            </label>

                            <label className="label-field">Created At
                                <Field name="createdAt" component={TimeInputComponent}></Field>
                                
                            </label>

                            <label className="label-field">Is Deleted
                                <Field name="isDeleted" component="select">
                                    <option value={0}>Not deleted</option>
                                    <option value={1}>Deleted</option>
                                </Field>
                            </label>

                            <button type="submit">Submit</button>
                        </Form>
                        )
                    }
                </Formik>
            </main>    
        )
    }
};