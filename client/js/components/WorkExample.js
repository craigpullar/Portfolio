import React from 'react';
import ReactDOM from 'react-dom';

class Site extends React.Component {
    handleClick(e) {
        e.preventDefault();
        ga('send', 'event', {
            eventCategory: `Site - ${this.props.class}`,
            eventAction: 'click',
        });
        const win = window.open(this.props.link, '_blank');
        win.focus();
    }
    render() {
        return (
            <div
                className="work-example col-sm-4"
                data-animation={this.props.animation}
                data-animation-delay={this.props.animationDelay}
            >
                <a
                    className="work-example__anchor"
                    href={this.props.link}
                    target="_blank"
                    onClick={(e) => { this.handleClick(e); }}
                >
                    <div className={`work-example__view work-example__view--${this.props.class}`} />
                </a>
            </div>
        );
    }
}

export { Site as default };
