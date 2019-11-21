import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
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
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Signup}/>

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
      
      <Route path="/addItem" component={AddItem} />
      <Route path="/shoplist" component={ShopList} />
      {/* <Route path='/lists' component={CombinedLists}/> */}
    </PrivateRoute>
    </Switch>

    

    </div>
  
  );
}

export default withRouter(App);
