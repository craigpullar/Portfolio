import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../components/NavItem';
import menuData from '../../data/menu.json';

const Menu = ({
    isMobile, toggleMenu,
}) => {
    function scrollCallback() {
        toggleMenu();

        ga('send', 'event', {
            eventCategory: `Nav - ${this.section}`,
            eventAction: 'click',
        });
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