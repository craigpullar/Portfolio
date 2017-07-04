import * as globals from "./globals";
import NavItem from "./NavItem";

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Nav extends React.Component {
	render() {
		let getInTouchCallback = () => {
			$('form input:first-of-type').focus();
		}
		let defaultCallback = () => {return false;};
		return (
			<div className="container-fluid dark-blue header text-center">
			<nav>
			<li className="logo">
			<img src="./images/logo.svg" />
			</li>
			<NavItem text="My work" section=".work" scrollCallback={defaultCallback}/>
			<NavItem text="My experience" section=".experience" scrollCallback={defaultCallback}/>
			<NavItem text="Get in touch" section=".form" scrollCallback={getInTouchCallback}/>
			</nav>
			</div>
			);
	}
}

export {Nav as default};
