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
  function routeToParty(e, item){
    e.preventDefault();
    props.history.push('/')
  }

  useEffect(() => {
    props.rxGetParty();
  },[])

if(props.isLoading){
  return <h2><span role="img" aria-labelledby='jsx-ally/accessible-emoji'>🔃</span></h2>
}else{
  return (
    <>
    <div>
    {props.error && <p>{props.error}</p>}
    {props.parties.map(item => {

      return (
        <>
        <h1>Choose Party to Plan</h1>
        <div>
        <PartyBoard key={item.id} 
                               party_name={item.party_name} 
                               host={item.host} 
                               guests={item.guests}
                               theme={item.theme}
                                date={item.date}
                                budget={item.budget}
                                category={item.id=props.category.id ? props.category : null}
                                onClick={e => routeToParty(e, item)}/>
        </div>
        </>
      )
    })} 

    </div>
    <div>
           <Link to="/partyform">
             <button>ADD NEW PARTY</button>
         </Link>
         </div>
    </>
  )
}
}


  const mapStateToProps = state => {
    return {
      parties: state.partyReducer.parties,
      id: state.partyReducer.id,
      error: state.partyReducer.error,
      isLoading: state.partyReducer.isLoading,
      category: state.categoryReducer.category,
      id: state.categoryReducer.id
    }
  }

export default connect(mapStateToProps, {rxGetParty})(PartyList); 

  
  