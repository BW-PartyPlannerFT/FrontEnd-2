// Displays a grid of parties that are in process of being planned. 
// Ability to delete party.
// This component will render PartyBoard
// Click on party and navigates to PartyBoard
// Button to create new party that redirects you to PartyForm

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {rxGetParty} from '../redux/parties/actions';

import PartyBoard from './PartyBoard';



const PartyList = (props) => {
  useEffect(() => {
    props.rxGetParty();
  },[])
  
  
  if(props.isLoading){
    return <h2><span role="img" aria-labelledby='jsx-ally/accessible-emoji'>🔃</span></h2>
}
return (
  <>
    <div>
        {/* {props.error && <p>{props.error}</p>} */}
        {/* {props.parties.map(item => { */}
          
            {/* return ( */}
                {/* <PartyBoard key={item.id} 
                            party_name={item.party_name} 
                            host={item.host} 
                            guests={item.guests}
                            theme={item.theme}
                            date={item.date}
                            budget={item.budget}/>
            )
        } */}
       </div>
       <div>
         <h1 className="party-h1">Select a Party to Plan</h1>
        <Link to="/partyform">
          <button className="add-list">ADD PARTY</button>
        </Link>
      </div>
      </>
    );
};


const mapStateToProps = state => {
  return {
    parties: state.parties,
    error: state.error,
    isLoading: state.isLoading
  }
}


export default connect(mapStateToProps, {rxGetParty})(PartyList); 