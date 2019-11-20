
import React, { useState } from "react";
import DatePicker from "./DatePicker";
import { Form } from 'reactstrap';


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
      <DatePicker />

      <div><button type="submit">Let's Party!</button></div>
    </form>
    </Form>
  );
};

export default PartyForm;
