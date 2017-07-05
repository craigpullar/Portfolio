import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';

class Experience extends React.Component {
	render() {
		return (

			<div className="col-sm-4 poe"
			data-animation={this.props.animation}
			data-animation-delay={this.props.animationDelay}>
			<span className="title">{this.props.title}</span>
			<br/>
			<p>{this.props.text}</p>
			</div>
			
			);
	}
}

export {Experience as default};
