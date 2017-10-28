import NavItem from "./NavItem";
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
let logo = "../images/logo.svg";

class Nav extends React.Component {
	render() {
		let getInTouchCallback = (section) => {
			$('form input:first-of-type').focus();
			defaultCallback(section);
		}
		let defaultCallback = (section) => {
			ga('send', 'event', {
				eventCategory: `Nav - ${section}`,
				eventAction: 'click'
			});
		};
		return (
			<div className="container-fluid dark-blue header text-center">
			<nav>
			<li className="logo">
			<img src={logo} />
			</li>
			<NavItem text="My work" section=".work" scrollCallback={() => {defaultCallback('My Work')}}/>
			<NavItem text="My experience" section=".experience" scrollCallback={() => {defaultCallback('My Exp')}}/>
			<NavItem text="My skills" section=".skills" scrollCallback={() => {defaultCallback('My Skills')}}/>
			<NavItem text="Get in touch" section=".form" scrollCallback={() => {getInTouchCallback('Get in')}}/>
			</nav>
			</div>
			);
	}
}

export {Nav as default};
