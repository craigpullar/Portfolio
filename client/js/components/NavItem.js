import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class NavItem extends React.Component {
    construcor(props) {
        this.super(props);

        this.click_event = this.click_event.bind(this);
    }
    click_event(e) {
        e.preventDefault();
        const section = this.props.section;
        const callback = this.props.scrollCallback;

        document.querySelector(section).scrollIntoView();
        callback();
    }
    render() {
        const isMobileClass = this.props.isMobile ? 'nav-item--mobile' : '';
        return (
            <li
                className={`nav-item ${isMobileClass}`}
                onClick={e => this.click_event(e)}
            >
                {this.props.text}
            </li>
        );
    }
}

export { NavItem as default };
