import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <header className="header">
        <NavLink to="/">
            <img src="/media/logo.png" alt="Home" />
        </NavLink>
    </header>
);

export default Header;
