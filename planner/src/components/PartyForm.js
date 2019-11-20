
import React, { useState } from "react";
import {connect} from 'react-redux';
import DatePicker from "./DatePicker";
import { Form } from 'reactstrap';
import {rxAddParty} from '../redux/parties/actions';


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

const mapStateToProps = state => {
  return {
    parties: state.parties,
    error: state.error,
    isAdding: state.isAdding
  }
}


export default connect(mapStateToProps, {rxAddParty})(PartyForm);
