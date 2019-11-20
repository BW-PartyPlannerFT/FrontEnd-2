// Displays a grid of parties that are in process of being planned. 
// Ability to delete party.
// This component will render PartyBoard
// Click on party and navigates to PartyBoard
// Button to create new party that redirects you to PartyForm

import React from 'react';
import { Link } from 'react-router-dom';

import PartyBoard from './PartyBoard';



const PartyList = (props) => {
  
    return (      

      <div className="partyList">
        <h1>Welcome to the Party!</h1>
        <p>List of parties here</p>
        <Link to="/partyboard">
          <button>Go To Party Board</button>
        </Link>
      </div>
    );
};
export default PartyList;