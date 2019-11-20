
import React, { useState } from "react";
import DatePicker from "./DatePicker";
import { Form } from 'reactstrap';
 

// import React, { useState, useEffect } from "react";
// import {withFormik, Form, Field} from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const OnBoard = ({ values, errors, touched, status}) =>{
// const [users, setUsers] = useState([]);

// useEffect(() => {
//     status && setUsers(users => [...users, status]);

// }, [status])


const PartyForm = props => {
  console.log("props", props);
  const [note, setNote] = useState({ title: "", body: "" });

  const submitForm = e => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };


  return (
    
    <Form>
      
    <form onSubmit={submitForm}>
      {/* <div><label htmlFor="host">Host:</label></div>
      <div><Input
        id="text"
        type="text"
        name="host"
        onChange={handleChanges}
        value={note.host}
      /></div> */}
      
      <DatePicker />
      
      {/* <div><label htmlFor="name">Party Title:</label></div><div>
      <textarea
        id="name"
        name="name"
        onChange={handleChanges}
        value={note.name}
      /></div>   
      <div><label htmlFor="theme">Theme:</label></div><div>
      <textarea
        id="theme"
        name="theme"
        onChange={handleChanges}
        value={note.theme}
      /></div>
            <div><label htmlFor="guest">Number of expected guests:</label></div>
      <div><Input
        id="guest"
        type="text"
        name="guest"
        onChange={handleChanges}
        value={note.guest}
      /></div>
            <div><label htmlFor="budget">Budget:</label></div>
      <div><Input
        id="budget"
        type="text"
        name="budget"
        onChange={handleChanges}
        value={note.budget}
      /></div> */}
      {/* <div>Category:</div>
      <select class="form-control form-control-lg">
        <option>Category</option>
        <option>Adult Birthday Party</option>
        <option>Dinner Party</option>
        <option>Anniversary Party</option>
        <option>Kid's Birthday Party</option>
        <option>Charity Party</option>
        </select>
        <label></label> */}

      <div><button type="submit">Let's Party!</button></div>
    </form></Form>
  );
};

export default PartyForm;


return (     
    <div>    
    <section>
      <Link to={"/"}>
        Home
      </Link>
      </section>
   
//         <Form>
//             <Field type="text" name="name" placeholder="Name" />
//             {touched.name && errors.name && (
//                         <p className="errors">{errors.name}</p>
//                     )}
//             <Field type="email" name="email" placeholder="Email" />
//             {touched.email && errors.email && (
//                         <p className="errors">{errors.email}</p>
//                     )}

//             <Field type="password" name="password" placeholder="Password" />
//             {touched.password && errors.password && (
//                         <p className="errors">{errors.password}</p>
//                     )}
//             <label>
//                 Terms Of Service
//                 <Field type="checkbox" name="termsOfService" checked={values.termsOfService} 
//                  />
//                     {touched.termsOfService && errors.termsOfService && (
//                         <p className="errors">{errors.termsOfService}</p>
//                     )}
//             </label>    
            
//             <button type="submit">Submit!</button>
   
//         </Form>

//         {users.map(user => (
//                 <ul key={user.id}>
//                     <li>Name: {user.name}</li>
//                     <li>Email: {user.email}</li>
//                     <li>Password: {user.password}</li>
//                     <li>Checkbox: {user.termsOfService}</li>
//                 </ul>
//             ))}
//     </div>
// );

// };

// const PartyForm = withFormik({
//     mapPropsToValues({ name, email, password, termsOfService }) {
//         return {
//             name: name || '',
//             email: email || '',
//             password: password || '',
//             termsOfService: termsOfService || false
//         };
//     },
//     validationSchema: Yup.object().shape({
//         name: Yup.string().required(),
//         email: Yup.string().required(),
//         password: Yup.string().required(),
//         termsOfService: Yup.boolean().oneOf([true], "error message string")
        
//     }),
//     handleSubmit(values, {setStatus}) {
//         axios
//             .post("https://reqres.in/api/users/", values)
//             .then(res => {
//                 setStatus(res.data);
//                 console.log(res);
//             }) 
//             .catch(err => console.log(err.response));
//     }
// })(OnBoard);
 


// export default PartyForm;
// // console.log("This is the HOC", FormikOnBoarding);
