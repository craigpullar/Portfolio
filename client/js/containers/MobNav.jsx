import React from 'react';
import $ from 'jquery';
import Menu from '../components/Menu';

class MobNav extends React.Component {
    constructor(props) {
        super(props);

        this.menuStates = {
            closed: {
                text: 'Menu',
                class: '',
                open: false,
            },
            open: {
                text: 'Close',
                class: 'open',
                open: true,
            }
        };

        this.state = this.menuStates.closed;

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        !this.state.open
        ? this.openMenu()
        : this.closeMenu();
    }

    openMenu() {
        this.setState(this.menuStates.open);
    }
    
    closeMenu() {
        this.setState(this.menuStates.closed);
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