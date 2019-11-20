//Displays all of the tracked/saved information, see mock up.
//Connected to Redux Store and props can be passed to child components via props like normal without having to pass them in on render. 
// Renders all party data saved through Redux store. 
// Renders GenericList, ShoppingList, TodoList, GenericList, and Pictures
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
function Party() {
    const [partyb, setPartyB]= useState([]);
  
    const partyBoard = () => {
      axiosWithAuth()
        .get('/parties')
        .then(response => {
          console.log(response);
          setPartyB(response.data);
        })
        .catch(fail => console.log("failed to work", fail));
    };
  
    useEffect(() => {
      partyBoard();
    } , []);
    return (
      <div>
        <Link to ="/todolist">
            <button>To Do List</button>
        </Link>
        <Link to="/shoppinglist">
            <button>Shopping List</button>
        </Link>
      </div>
    );
  }
  export default Party;
  
  
  
  
