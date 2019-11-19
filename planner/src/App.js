import React, {useContext, useReducer} from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PartyForm from './components/PartyForm';
import TodoList from './components/todolist/TodoList';

import PrivateRoute from './components/PrivateRoute';
import PartyList from '../src/components/PartyList';
import {usePersistedContext, usePersistedReducer} from './components/hooks/useLocalStorage';

import Store from './context';
import {appReducers} from './redux/reducers/appReducers';


function App() {
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = usePersistedReducer(
    useReducer(appReducers, globalStore),
    "state" // The localStorage key
  );
  return (
    <Store.Provider value={{state, dispatch}}>
    <div className="App">
    
     <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup}/>

    <PrivateRoute>
      <Route exact path='/partyList' component={PartyList}/>
      <Route path="/partyform" component={PartyForm}/>
      <Route path='/todoList' component={TodoList}/>
    </PrivateRoute>
    </Switch>
    </div>
    </Store.Provider>
  );
}

export default withRouter(App);
