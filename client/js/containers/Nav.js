import NavItem from '../components/NavItem';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const logo = '../images/logo.svg';

class Nav extends React.Component {
    render() {
        const getInTouchCallback = (section) => {
            $('form input:first-of-type').focus();
            defaultCallback(section);
        };
        let defaultCallback = (section) => {
            ga('send', 'event', {
                eventCategory: `Nav - ${section}`,
                eventAction: 'click',
            });
        };
        return (
            <div className="container-fluid dark-blue header text-center">
                <nav className="nav">
                    <li className="nav-item nav-item--logo">
                        <img className="nav-item__logo-img" src={logo} />
                    </li>
                    <NavItem text="My work" section=".work" scrollCallback={() => { defaultCallback('My Work'); }} />
                    <NavItem text="My experience" section=".experience" scrollCallback={() => { defaultCallback('My Exp'); }} />
                    <NavItem text="My skills" section=".skills" scrollCallback={() => { defaultCallback('My Skills'); }} />
                    <NavItem text="Get in touch" section=".contact-form" scrollCallback={() => { getInTouchCallback('Get in'); }} />
                </nav>
            </div>
        );
    }
}

export { Nav as default };
