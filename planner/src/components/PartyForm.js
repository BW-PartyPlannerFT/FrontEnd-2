
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
         <div> Host <div><Field type="text" name="host" placeholder="Host" />
        {touched.host && errors.host && <p className="errors">{errors.host}</p>}</div></div>
    
        <div> Party Title <div><Field type="text" name="name" placeholder="Party Title" />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}</div></div>
        
        <div>Theme <div><Field type="text" name="theme" placeholder="Theme" />
        {touched.theme && errors.theme && (
          <p className="errors">{errors.theme}</p>
        )}</div></div>

        <div>Number of expected guests <div><Field type="text" name="guest" placeholder="# of expected guests" />
        {touched.guest && errors.guest && (
          <p className="errors">{errors.guest}</p>
        )}</div></div>

        <div> Description <div><Field type="text" name="description" placeholder="Description" />
        {touched.description && errors.description && (
          <p className="errors">{errors.description}</p>
        )}</div></div>

        <div> Budget <div><Field type="text" name="budget" placeholder="Budget" />
        {touched.budget && errors.budget && (
          <p className="errors">{errors.budget}</p>
        )}</div></div>
        <select class="form-control form-control-lg">
        <option>Category</option>
        <option>Adult Birthday Party</option>
        <option>Dinner Party</option>
        <option>Anniversary Party</option>
        <option>Kid's Birthday Party</option>
        <option>Charity Party</option>
        </select>
        <label>
          {/* <Field
            type="dropdown"
            name="category"
            placeholder="Cat"
          /> */}
          {touched.category && errors.category && (
            <p className="errors">{errors.category}</p>
          )}
        </label>

        <div><button type="submit">Let's Party!!!</button></div>
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
          <li>Category: {user.category}</li>
        </ul>
      ))}
    </div>
  );
};

const PartyForm = withFormik({
  mapPropsToValues({ host, name, description, password, theme, guest, budget, category }) {
    return {
      host: host || '',
      name: name || '',
      description: description || '',
      password: password || '',
      theme: theme || '',
      guest: guest || '',
      budget: budget || '',
      category: category || '',
    };
  },
  validationSchema: Yup.object().shape({
    host: Yup.string().required(),
    name: Yup.string().required(),
    description: Yup.string().required(),
    password: Yup.string().required(),
    theme: Yup.string().required(),
    guest: Yup.string().required(),
    budget: Yup.string().required(),
    category: Yup.string().required(),
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