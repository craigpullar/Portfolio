import React from 'react';
import $ from 'jquery';
import Menu from '../components/Menu';

const logo = '../images/logo.svg';

const Nav = () => (
    <div className="container-fluid dark-blue header text-center">
        <nav className="nav">
            <li className="nav-item nav-item--logo">
                <img
                    className="nav-item__logo-img"
                    src={logo}
                />
            </li>
            <Menu />
        </nav>
    </div>
);

export default Nav;