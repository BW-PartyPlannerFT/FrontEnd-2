
import React, { useState } from "react";
import {connect} from 'react-redux';
import DatePicker from "./DatePicker";
import { Form } from 'reactstrap';
import {rxAddParty} from '../redux/parties/actions';


const PartyForm = props => {
  console.log("party form props", props);
  const [note, setNote] = useState({ id:"", party_name: "", host: "", guests: "", theme: "", date: "", budget: "" });

  const submitForm = e => {
    e.preventDefault();
    props.rxAddParty(note);
    setNote({ party_name: "", host: "", guests:"", theme: "", date: "", budget: ""});
  };


  return (
    <Form>
    <form onSubmit={submitForm}>
      <DatePicker note={note} setNote={setNote} rxAddParty={rxAddParty}/>

      <div><button type="submit">Let's Party!!</button></div>
    </form>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    parties: state.partyReducer.parties,
    error: state.partyReducer.error,
    isAdding: state.partyReducer.isAdding
  }
}


export default connect(mapStateToProps, {rxAddParty})(PartyForm);
//need help with this form passing in data