import React from 'react';
import NavItem from '../components/NavItem';
import menuData from '../../data/menu.json';

const Menu = ({
    isMobile = false,
    toggleMenu = () => {}
}) => {
    const scrollCallback = function(){
        toggleMenu();

        ga('send', 'event', {
            eventCategory: `Nav - ${this.section}`,
            eventAction: 'click',
        });
    };

    const renderNavItem = navItemData => (
        <NavItem
            {...navItemData}
            scrollCallback={scrollCallback.bind(navItemData)}
            isMobile={isMobile}
        />
    );

    return (
        <span>
            {menuData.map(renderNavItem)}
        </span>
    );
};

export default Menu;