import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/add'>AddProduct</Link>
            <Link to='/manage'>Manage Products</Link>
        </nav>
    );
};

export default Header;