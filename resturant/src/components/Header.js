import React from 'react'
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
    return(
        <div className='navbar'>
            <div className='leftside'>
                <img src= {Logo} />
            </div>
            <div className='rightside'>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About Us</Link>
                
            </div>

        </div>
    );
}

export default Header;