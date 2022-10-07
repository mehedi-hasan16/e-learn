import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/home">Home</a>
                <a href="/course">Course</a>
                <a href="/profile">Profile</a>
            </nav>
        </div>
    );
};

export default Header;