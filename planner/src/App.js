import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PartyForm from './components/PartyForm';
// import CombinedLists from './components/CombinedLists';

import PrivateRoute from './components/PrivateRoute';
import PartyList from '../src/components/PartyList';




import PartyForm from './components/PartyForm';

import ImageUpload from './components/ImageUpload';

import PartyBoard from './components/PartyBoard';


function App() {
 
  return (
    
    <div className="App">
    
     <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup}/>

    <PrivateRoute>

      <Route exact path='/partyList' component={PartyList}/>
      <Route path="/partyform" component={PartyForm}/>
      {/* <Route path='/lists' component={CombinedLists}/> */}
    </PrivateRoute>
    </Switch>

    <Route path="/partyform" component={PartyForm}/>

    <Route path="/imageupload" component={ImageUpload}/>

    <Route path="/partyboard" component={PartyBoard} />


    </div>
  
  );
}

export default withRouter(App);
