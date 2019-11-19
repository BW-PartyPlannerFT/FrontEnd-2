import React, { useState } from "react";

const PartyForm = props => {
  console.log("props", props);
  const [note, setNote] = useState({ title: "", body: "" });

  const handleChanges = e => {
    console.log(note);
    // console.log("the name", e.target.name)
    // console.log("the event target", e.target)
    //we are dynamically setting our keys.
    // setNote({ ...note, title: e.target.value });
    // setNote({ ...note, note: e.target.value });
    //  const nameObj={...note}
    //  nameObj[e.target.name]= e.target.value
    // setNote(nameObj)
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };

  return (
    
    <form onSubmit={submitForm}>
      <div><label htmlFor="host">Host</label></div>
      <div><input
        id="text"
        type="text"
        name="host"
        onChange={handleChanges}
        value={note.host}
      /></div>
      <div><label htmlFor="name">Party Title</label></div><div>
      <textarea
        id="name"
        name="name"
        onChange={handleChanges}
        value={note.name}
      /></div>   
      <div><label htmlFor="theme">Theme</label></div><div>
      <textarea
        id="theme"
        name="theme"
        onChange={handleChanges}
        value={note.theme}
      /></div>
            <div><label htmlFor="guest">Number of expected Guest</label></div>
      <div><input
        id="guest"
        type="text"
        name="guest"
        onChange={handleChanges}
        value={note.guest}
      /></div>
            <div><label htmlFor="description">Descripition</label></div>
      <div><input
        id="descrption"
        type="text"
        name="description"
        onChange={handleChanges}
        value={note.description}
      /></div>
            <div><label htmlFor="budget">Budget</label></div>
      <div><input
        id="budget"
        type="text"
        name="budget"
        onChange={handleChanges}
        value={note.budget}
      /></div>
      <div>Category</div>
      <select class="form-control form-control-lg">
        <option>Category</option>
        <option>Adult Birthday Party</option>
        <option>Dinner Party</option>
        <option>Anniversary Party</option>
        <option>Kid's Birthday Party</option>
        <option>Charity Party</option>
        </select>
        <label></label>

      <div><button type="submit">Let's Party</button></div>
    </form>
  );
};

export default PartyForm;