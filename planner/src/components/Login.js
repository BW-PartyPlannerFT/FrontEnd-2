// Login form with input for username and password. 
// State handled locally.
// On submit redirects to private route (PartyList)
import React from 'react';

function Login() {
    return (
        <div className="Login">
           <form>
               <label>
                   Username:
                   <input type='text' placeholder='Enter Username' />
               </label>
               <label>
                   Password:
                   <input type='password' placeholder='Password' />
               </label>
            </form> 
        
        </div>
      );
    }
  
  export default Login;
  