import React from 'react';

const NavItem = ({
    section, scrollCallback, text, isMobile,
}) => {
    const scrollToSection = (event) => {
        event.preventDefault();
        document.querySelector(section).scrollIntoView();
        scrollCallback();
    };

    const isMobileClass = isMobile ? 'nav-item--mobile' : '';

    return (
        <li
            className={`nav-item ${isMobileClass}`}
            onClick={scrollToSection}
        >
            {text}
        </li>
    );
};

export default NavItem;