import React from 'react';
import PropTypes from 'prop-types';

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
            onKeyPress={scrollToSection}
            role="presentation"
        >
            {text}
        </li>
    );
};

NavItem.propTypes = {
    section: PropTypes.string.isRequired,
    scrollCallback: PropTypes.func,
    text: PropTypes.string.isRequired,
    isMobile: PropTypes.bool,
};

NavItem.defaultProps = {
    scrollCallback: () => {},
    isMobile: false,
};

export default NavItem;