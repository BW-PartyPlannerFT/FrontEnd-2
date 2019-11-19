import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PartyForm from './components/PartyForm';

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup}/>
    <Route path="/partyform" component={PartyForm}/>
    </div>
  );
}

export default App;
