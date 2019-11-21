import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const Signup = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2>Create an Account</h2>
                    <Link to='/planner/register'><button className='planner-sign-in-button'>I'm a party planner</button></Link>
            
                    <Link to='/planner/login'><p>Already have an account? Log in here.</p></Link>
                </div>
            </section>
        </div>
    )
};

export default Signup;