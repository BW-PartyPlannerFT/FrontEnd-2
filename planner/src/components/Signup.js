//Sign up form with inputs for username, email and passwords.
//Inputs need validation.
//State will be managed locally 
//axios post request.
//Once signed up, onClick will redirect to login pg. 
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios
.post("http://partyplanner-b.herokuapp.com/")
.then(res => {
console.log()  
})

.catch(err => {
console.log(err) 
});
export default function signup(){
    return(
        <div className="Signup-Links">
            <h1>REGISTER</h1>
            <label>
                   USERNAME
                   <input type='text' />
               </label>
               <label>
                   EMAIL
                   <input type='email'/>
               </label>
               <label>
                   Password:
                   <input type='password' />
               </label>
            <Link to="/">

            </Link>
        </div>
    )
}

