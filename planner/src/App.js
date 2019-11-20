import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import PartyList from '../src/components/PartyList';
import PartyForm from './components/PartyForm';
import ImageUpload from './components/ImageUpload';
function App() {
  return (
    <div className="App">
     <Nav/> 
     <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup}/>

    <PrivateRoute>
      <Route exact path='/partyList' component={PartyList}/>
    </PrivateRoute>
    </Switch>

    <Route path="/partyform" component={PartyForm}/>
    <Route path="/imageupload" component={ImageUpload}/>
    </div>
  );
}

export default withRouter(App);
