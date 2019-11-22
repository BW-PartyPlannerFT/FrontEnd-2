<<<<<<< HEAD
import React from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PartyForm from "./components/PartyForm";
import "./components/Signup.css";
import "./components/partylist.css";
=======
import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateAccount from './components/CreateAccount';
import PartyForm from './components/PartyForm';
// import TodoList from '../src/components/todolist/TodoList';
import './components/Signup.css';
>>>>>>> d6519b226c6190cad3e30475bad0d728046230e7

// import CombinedLists from './components/CombinedLists';

import PrivateRoute from "./components/PrivateRoute";
import PartyList from "../src/components/PartyList";

import ImageUpload from "./components/ImageUpload";

<<<<<<< HEAD
import PartyBoard from "./components/PartyBoard";
import AddItem from "./components/shopList/AddItem";
import shopList from "./components/shopList/shopList";
import ShopList from "./components/shopList/shopList";
=======
import PartyBoard from './components/PartyBoard';
import AddItem from './components/shopList/AddItem';
// import shopList from './components/shopList/shopList';
import ShopList from './components/shopList/shopList';
>>>>>>> d6519b226c6190cad3e30475bad0d728046230e7

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />

        <PrivateRoute>
          <Route exact path="/partyList" component={PartyList} />
          <Route path="/partyform" component={PartyForm} />
          <Route path="/imageupload" component={ImageUpload} />
          <Route path="/partyboard" component={PartyBoard} />
          <Route path="/additem" component={AddItem} />
          <Route path="/shoplist" component={ShopList} />
          {/* <Route path='/lists' component={CombinedLists}/> */}
        </PrivateRoute>
      </Switch>
=======
    
     <Switch>
      <Route exact path='/' component={Welcome}/>
			<Route path='/register' component={Signup}/>
      <Route path='/planner/login' component={Login}/>
      <Route path='/planner/register' component={CreateAccount}/>
    <PrivateRoute>
      <Route exact path='/partyList' render={props => (
        <PartyList
          {...props}
          />
      )}/> 
      <Route path="partyList/:id" render={props => (
        <PartyBoard {...props} />
      )} />
      <Route path="/partyform" component={PartyForm}/>
      <Route path="/imageupload" component={ImageUpload}/>
      {/* <Route path="/todolist" component={TodoList}/> */}
      <Route path="/addItem" component={AddItem} />
      <Route path="/shoplist" component={ShopList} />
      
      
    </PrivateRoute>
    </Switch>

    

>>>>>>> d6519b226c6190cad3e30475bad0d728046230e7
    </div>
  );
}

export default withRouter(App);
