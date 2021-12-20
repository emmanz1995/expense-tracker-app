import React, { useState } from 'react';
import { StyledNavbar } from './styles';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    return (
        <StyledNavbar>
            <div className="nav-heading">
                <h1>Cashify Tracker</h1>
                <i className="fas fa-bars" onClick={openMenu} />
            </div>
            <ul className={!isOpen ? "menu open-menu" : "open-menu"}>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </StyledNavbar>
    );
}

export default Navbar;
