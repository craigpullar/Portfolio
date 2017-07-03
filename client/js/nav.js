import * as globals from "./globals";
import NavItem from "./NavItem";

import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
	render() {
		return (
			<div className="container-fluid dark-blue header text-center">
			<nav>
			<li className="logo">
			<img src="./images/logo.svg" />
			</li>
			<NavItem text="My work" />
			<NavItem text="My experience" />
			<NavItem text="Get in touch" />
			</nav>
			</div>
			);
	}
}

export {Nav as default};
