import React from 'react';
import Menu from '../components/Menu';

class MobNav extends React.Component {
    constructor() {
        super();
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
            },
        };

        this.state = this.menuStates.closed;

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        const menuStateToApply = (!this.state.open
            ? this.menuStates.open
            : this.menuStates.closed);
        this.setState(menuStateToApply);
    }

    render() {
        return (
            <div>
                <div
                    className="btn--mob-nav"
                    onClick={this.toggleMenu}
                    onKeyPress={this.toggleMenu}
                    role="button"
                    tabIndex="0"
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