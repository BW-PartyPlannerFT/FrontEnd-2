//Sign up form with inputs for username, email and passwords.
//Inputs need validation.
//State will be managed locally 
//axios post request.
//Once signed up, onClick will redirect to login pg. 
import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';


const Signup = (props) => {
    console.log('signup props', props);
    const [newCreds, setNewCreds] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setNewCreds({
            ...newCreds,
            [e.target.name]: e.target.value
        });
    };
    
        const signup = (e)=> {
            e.preventDefault();
            axios
            .post('https://partyplanner-b.herokuapp.com/api/auth/register', newCreds)
            .then(res => {
                console.log(res.data, res);
                sessionStorage.setItem('token', res.data.user);
                props.history.push('/');
                setNewCreds('')
            })
            .catch(err => alert('There was an error in signing up', err));
        }
    
        

    return(
        <div className="Signup-Links">
            <h1>REGISTER</h1>
            <form onSubmit={signup}>
            <label>
                   USERNAME:
                   <input type='text' name='username' placeholder='Type new username here...' value={newCreds.username} onChange={handleChange}/>
               </label>
               <label>
                   EMAIL:
                   <input type='email' name='email' placeholder='Type email here...' value={newCreds.email} onChange={handleChange}/>
               </label>
               <label>
                   PASSWORD:
                   <input type='password' name='password' placeholder='Enter new password here...' value={newCreds.password} onChange={handleChange}/>
               </label>
            
                <button>Submit</button>
            
            </form>
        </div>
    )
}
export default Signup;

