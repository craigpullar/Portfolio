import React from 'react';
import NavItem from '../components/NavItem';
import menuData from '../../data/menu.json';

const Menu = ({
    isMobile = false,
    toggleMenu = () => {},
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

export default Menu;