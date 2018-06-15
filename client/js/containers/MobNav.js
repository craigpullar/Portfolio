import NavItem from '../components/NavItem';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class MobNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            text: 'Menu',
            class: '',
            open: false,

        };
    }
    toggleMenu() {
        if (!this.state.open) {
            this.setState({
                text: 'Close',
                class: 'open',
                open: true,
            });
        } else {
            this.setState({

                text: 'Menu',
                class: '',
                open: false,

            });
        }
    }
    render() {
        const closeMenuCallback = (section) => {
            $('.mob-nav-btn').click();
            defaultCallback(section);
        };
        const getInTouchCallback = (section) => {
            $('.mob-nav-btn').click();
            defaultCallback(section);
            $('form input:first-of-type').focus();
        };
        let defaultCallback = (section) => {
            ga('send', 'event', {
                eventCategory: `Nav - ${section}`,
                eventAction: 'click',
            });
        };
        return (
            <div>
                <div className="btn--mob-nav" onClick={() => { this.toggleMenu(); }}>{this.state.text}</div>
                <div className={`${this.state.class} mob-nav`}>
                    <NavItem text="My work" section=".work" scrollCallback={() => { closeMenuCallback('My work'); }} isMobile />
                    <NavItem text="My experience" section=".experience" scrollCallback={() => { closeMenuCallback('My exp'); }} isMobile />
                    <NavItem text="My skills" section=".skills" scrollCallback={() => { closeMenuCallback('My skills'); }} isMobile />
                    <NavItem text="Get in touch" section=".contact-form" scrollCallback={() => { getInTouchCallback('Get in touch'); }} isMobile />
                </div>
            </div>
        );
    }
}

export { MobNav as default };
