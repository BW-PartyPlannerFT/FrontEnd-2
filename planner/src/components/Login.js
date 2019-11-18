// Login form with input for username and password. 
// State handled locally.
// On submit redirects to private route (PartyList)
import React from 'react';
import { Link } from 'react-router-dom';

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
               <Link to="/PartyList">
                   <button>Login</button>
               </Link>
               <Link to="/Signup">
                   <button>Sign up</button>
               </Link>
            </form> 
        
        </div>
      );
    }
  
  export default Login;
  