import React from 'react';
import ReactDOM from 'react-dom';

class Experience extends React.Component {
    render() {
        return (

          <div
              className="col-sm-4 experience-highlight"
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
