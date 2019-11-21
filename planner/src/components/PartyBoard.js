//Displays all of the tracked/saved information, see mock up.
//Connected to Redux Store and props can be passed to child components via props like normal without having to pass them in on render. 
// Renders all party data saved through Redux store. 

// Renders GenericList, ShoppingList, TodoList, GenericList, and Pictures
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';


import React from 'react';
import {Link} from 'react-router-dom';

const PartyBoard = props => {
    console.log('partyboard props', props)
    
    // const item = props.state.parties.find(
    //     party => `${party.id}`  === props.match.params.id
    // )
    return (
      <>
        <div>
            
            <h3>{props.party_name}</h3>
            
            <ul>
                <li>Host: {props.host}</li>
                <li>guests: {props.guests}</li>
                <li>theme: {props.theme}</li>
                <li>date: {props.date}</li>
                <li>date: {props.date}</li>
                <li>budget: {props.budget}</li>
                <li>Category: {props.category}</li>
            </ul>
            
        </div>
        <div>
        
          <Link to ="/todolist">
              <button>To Do List</button>
          </Link>
        
          <Link to="/shoppinglist">
              <button>Shopping List</button>
          </Link>
          <Link to= '/imageupload'>
              <button>Add Image</button>
          </Link>
        
        </div>
        </>
    )
}
export default PartyBoard;
  
 
