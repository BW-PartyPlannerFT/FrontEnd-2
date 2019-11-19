// Displays a grid of parties that are in process of being planned. 
// Ability to delete party.
// This component will render PartyBoard
// Click on party and navigates to PartyBoard
// Button to create new party that redirects you to PartyForm

import React from 'react';
import CombinedLists from '../components/CombinedLists';

const PartyList = () => {
    return (
      <div>
        <h1>Welcome to the Party!</h1>
        <p>List of parties here</p>
        <CombinedLists/>
      </div>
    );
};
export default PartyList;