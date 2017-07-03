import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
	render() {
		return (
			<nav>
			<li className="logo">
			<img src="./images/logo.svg" />
			</li>
			<li>
			My work
			</li>
			<li>
			My experience
			</li>
			<li>
			Get in touch
			</li>
			</nav>
			);
	}
}

export {Nav as default};
