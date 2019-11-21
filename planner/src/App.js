import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateAccount from './components/CreateAccount';
import PartyForm from './components/PartyForm';
import './components/Signup.css';

// import CombinedLists from './components/CombinedLists';

import PrivateRoute from './components/PrivateRoute';
import PartyList from '../src/components/PartyList';

import ImageUpload from './components/ImageUpload';

import PartyBoard from './components/PartyBoard';
import AddItem from './components/shopList/AddItem';
// import shopList from './components/shopList/shopList';
import ShopList from './components/shopList/shopList';

function App() {
 
  return (
    
    <div className="App">
    
     <Switch>
      <Route exact path='/' component={Welcome}/>
			<Route path='/register' component={Signup}/>
      <Route path='/planner/login' component={Login}/>
      <Route path='/planner/register' component={CreateAccount}/>

    <PrivateRoute>

      <Route exact path='/partyList' component={PartyList}/>
      <Route path="/partyform" component={PartyForm}/>
      <Route path="/imageupload" component={ImageUpload}/>
      <Route path="/partyboard" component={PartyBoard} />
      <Route path="/additem" component={AddItem} />
      <Route path="/shoplist" component={ShopList} />
      {/* <Route path='/lists' component={CombinedLists}/> */}
    </PrivateRoute>
    </Switch>

    

    </div>
  
  );
}

export default withRouter(App);
