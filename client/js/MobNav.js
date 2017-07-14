import NavItem from "./NavItem";
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class MobNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

			text : 'Menu',
			class : '',
			open : false

		};
	}
	toggleMenu() {
		console.log(this.state.open);
		if (!this.state.open) 
			this.setState({
				text : 'Close',
				class : 'open',
				open : true
			});
		else 
			this.setState({

				text : 'Menu',
				class : '',
				open : false

			});
	}
	render() {
		let closeMenuCallback = () => {
			$('.mob-nav-btn').click();
		};
		let getInTouchCallback = () => {
			closeMenuCallback();
			$('form input:first-of-type').focus();
		}
		let defaultCallback = () => {return false;};
		return (
			<div>
			<div className="mob-nav-btn" onClick={() => {this.toggleMenu()}}>{this.state.text}</div>
			<div className={this.state.class + " mob-nav"}>
			<NavItem text="My work" section=".work" scrollCallback={closeMenuCallback}/>
			<NavItem text="My experience" section=".experience" scrollCallback={closeMenuCallback}/>
			<NavItem text="Get in touch" section=".form" scrollCallback={getInTouchCallback}/>
			</div>
			</div>
			);
	}
}

export {MobNav as default};
