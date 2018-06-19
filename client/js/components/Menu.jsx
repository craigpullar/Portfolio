import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../components/NavItem';
import menuData from '../../data/menu.json';
import GAEvent from '../utils/googleAnalytics';

const Menu = ({
    isMobile, toggleMenu,
}) => {
    function scrollCallback() {
        GAEvent.click({
            eventCategory:  `Nav - ${this.section}`,
        });

        toggleMenu();   
    }

    const renderNavItem = (navItemData) => {
        const navItemProps = {
            scrollCallback: scrollCallback.bind(navItemData),
            isMobile,
            ...navItemData,
        };

        return <NavItem {...navItemProps} />;
    };

    return (
        <span>
            {menuData.map(renderNavItem)}
        </span>
    );
};

Menu.defaultProps = {
    isMobile: false,
    toggleMenu: () => {},
};

Menu.propTypes = {
    isMobile: PropTypes.bool,
    toggleMenu: PropTypes.func,
};

export default Menu;