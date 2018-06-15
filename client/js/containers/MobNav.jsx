import React from 'react';
import $ from 'jquery';
import Menu from '../components/Menu';

class MobNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Menu',
            class: '',
            open: false,
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        !this.state.open
        ? this.openMenu()
        : this.closeMenu();
    }

    openMenu() {
        this.setState({
            text: 'Close',
            class: 'open',
            open: true,
        });
    }
    
    closeMenu() {
        this.setState({
            text: 'Menu',
            class: '',
            open: false,
        });
    }

    render() {
        return (
            <div>
                <div
                    className="btn--mob-nav"
                    onClick={this.toggleMenu}
                >
                    {this.state.text}
                </div>
                <div className={`${this.state.class} mob-nav`}>
                    <Menu
                        isMobile
                        toggleMenu={this.toggleMenu}
                    />
                </div>
            </div>
        );
    }
}

export default MobNav;