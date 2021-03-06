import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => (
    <div className="header"> 
        <Link className="logo-container" to="/">
             <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="" className="option">CONTACT</Link>
        </div>
    </div>
)


export default Header;
