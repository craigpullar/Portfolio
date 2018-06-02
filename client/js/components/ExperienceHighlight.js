import React from 'react';
import ReactDOM from 'react-dom';

class Experience extends React.Component {
    render() {
        return (

          <div
              className="experience-highlight col-sm-4"
              data-animation={this.props.animation}
              data-animation-delay={this.props.animationDelay}
            >
              <span className="experience-highlight__title">{this.props.title}</span>
              <br />
              <p>{this.props.text}</p>
            </div>

        );
    }
}

export { Experience as default };
