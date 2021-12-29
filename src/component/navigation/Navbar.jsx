import React, { useState } from 'react';
import { StyledNavbar } from './styles';
import useHistoryHook from '../../hooks/useHistory';
import AuthAPI from '../../api/AuthAPI';
import useProfile from '../../hooks/useProfile';

const Navbar = () => {
    const { navigate } = useHistoryHook();
    const [isOpen, setIsOpen] = useState(false);
    const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
    const openMenu = () => setIsOpen(!isOpen);
    const handleLogout = (evt) => {
        evt.preventDefault();
        AuthAPI.onLogout()
        navigate('/');
    }
    const { profileInfo } = useProfile();
    return (
        <StyledNavbar>
            <div className="nav-heading">
                <h1>Cashify Tracker</h1>
                <i className="fas fa-bars" onClick={openMenu} />
            </div>
            <ul className={!isOpen ? "menu open-menu" : "open-menu"}>
                {!jwt ? (
                    <>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                    </>
                ) : (
                    <>
                        <li><a href="" onClick={handleLogout}>Log Out</a></li>
                        <li><a href="/dashboard">{profileInfo?.username}</a></li>
                    </>
                )}
            </ul>
        </StyledNavbar>
    );
}

export default Navbar;
