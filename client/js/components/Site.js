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
              className="col-sm-4 work-example"
              data-animation={this.props.animation}
              data-animation-delay={this.props.animationDelay}
            >
              <a className="work-example__anchor"
                href={this.props.link}
                target="_blank"
                onClick={(e) => { this.handleClick(e); }}
            >
                  <div className={`${this.props.class} work-example__view`} />
                </a>
            </div>
        );
    }
}

export { Site as default };
