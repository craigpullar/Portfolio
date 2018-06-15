import React from 'react';
import ReactDOM from 'react-dom';

class Skill extends React.Component {
    render() {
        return (
            <div
                className={`skill--${this.props.type} skill`}
                data-animation={this.props.animation}
                data-animation-delay={this.props.animationDelay}
            >
                {this.props.text}
            </div>
        );
    }
}

export { Skill as default };
