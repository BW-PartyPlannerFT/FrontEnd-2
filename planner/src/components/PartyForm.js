import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OnBoard = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Form>
          <h2>Basic Info</h2>
          <h4>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</h4>
         <div> <Field type="text" name="host" placeholder="Host" />
        {touched.host && errors.host && <p className="errors">{errors.host}</p>}</div>
    
        <div> <Field type="text" name="name" placeholder="Party Title" />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}</div> 
        
        <div><Field type="text" name="theme" placeholder="Theme" />
        {touched.theme && errors.theme && (
          <p className="errors">{errors.theme}</p>
        )}</div>

        <div><Field type="text" name="guest" placeholder="# of guest" />
        {touched.guest && errors.guest && (
          <p className="errors">{errors.guest}</p>
        )}</div>

        <div> <Field type="text" name="description" placeholder="Description" />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}</div>

        <div> <Field type="text" name="budget" placeholder="Budget" />
        {touched.budget && errors.budget && (
          <p className="errors">{errors.budget}</p>
        )}</div>

        <label>
          Terms Of Service
          <Field
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
          />
          {touched.termsOfService && errors.termsOfService && (
            <p className="errors">{errors.termsOfService}</p>
          )}
        </label>

        <div><button type="submit">Add Party!</button></div>
      </Form>
      {users.map(user => (
        <ul key={user.id}>
          <li>Host: {user.host}</li>
          <li>Name: {user.name}</li>
          <li>Description: {user.description}</li>  
          <li>Theme: {user.theme}</li>
          <li>Password: {user.password}</li>
          <li>Guest: {user.guest}</li>
          <li>Budget: {user.budget}</li>
          <li>Checkbox: {user.termsOfService}</li>
        </ul>
      ))}
    </div>
  );
};

const PartyForm = withFormik({
  mapPropsToValues({ host, name, email, password, theme, guest, budget, termsOfService }) {
    return {
      host: host || '',
      name: name || '',
      email: email || '',
      password: password || '',
      theme: theme || '',
      guest: guest || '',
      budget: budget || '',
      termsOfService: termsOfService || false
    };
  },
  validationSchema: Yup.object().shape({
    host: Yup.string().required(),
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    theme: Yup.string().required(),
    guest: Yup.string().required(),
    budget: Yup.string().required(),
    termsOfService: Yup.boolean().oneOf([true], 'error message string')
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post('https://reqres.in/api/users/', values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(OnBoard);

export default PartyForm;