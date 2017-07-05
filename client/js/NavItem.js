import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class NavItem extends React.Component {
	construcor(props) {
		this.super(props);
		

	}
	onClick(event, props) {
		event.preventDefault();
		let section = this.props.section;
		let callback = this.props.scrollCallback;

		$('body').animate({
			scrollTop: $(section).offset().top},
			500, function(){
				console.log('hi');
				callback();
			});

	}
	render() {
		return (
			<li onClick={() => this.onClick(event,this.props)}>
			{this.props.text}
			</li>
			);
		}
	}

	export {NavItem as default};
