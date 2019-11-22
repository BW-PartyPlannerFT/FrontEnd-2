import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <section className='header'>
            <Link to='/'><h1>Party Planner</h1></Link>
        </section>
    )
};

export default Header;