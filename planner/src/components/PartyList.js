// Displays a grid of parties that are in process of being planned. 
// Ability to delete party.
// This component will render PartyBoard
// Click on party and navigates to PartyBoard
// Button to create new party that redirects you to PartyForm

import React from 'react';

import PartyBoard from './PartyBoard';



const PartyList = (props) => {
  
    return (
      <div>
        
        <h1>{props.parties.map(party => {
          return <PartyBoard/>
        })}</h1>
        <p>List of parties here</p>
       
      </div>
    );
};
export default PartyList;