import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup}/>
    </div>
  );
}

export default App;
