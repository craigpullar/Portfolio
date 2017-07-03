import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';

class NavItem extends React.Component {
	construcor(props) {
		this.super(props);
	}
	onClick() {
		console.log('click');
		return false;
	}
	render() {
		return (
			<li onClick={() =>{return this.onClick()}}>
			{this.props.text}
			</li>
			);
		}
	}

	export {NavItem as default};
