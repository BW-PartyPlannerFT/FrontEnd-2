import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
    <Route exact path="/" components={Login} />
    <Route path="/signup" components={Signup}/>
    </div>
  );
}

export default App;
