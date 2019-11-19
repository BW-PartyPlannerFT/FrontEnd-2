import React, { useState } from "react";
import DatePicker from "./DatePicker";
import { Form, Input } from 'reactstrap';
 

const PartyForm = props => {
  console.log("props", props);
  const [note, setNote] = useState({ title: "", body: "" });

  const handleChanges = e => {
    console.log(note);
    setNote({ ...note, [e.target.name]: e.target.value });
  };

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