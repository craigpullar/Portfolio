import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class ContactForm extends React.Component {
	inputFocus(event, id) {
		if(!$(`#${id}`).val().length)
			$(`#${id}`).toggleClass('focus');
	}
	render() {
		return (
			<form action="">
			<input id="name" type="text" placeholder="Name"
			onFocus={() => {this.inputFocus(event, 'name')}}
			onBlur={() => {this.inputFocus(event, 'name')}}
			/>
			<input id="email" type="email" placeholder="Email" 
			onFocus={() => {this.inputFocus(event, 'email')}}
			onBlur={() => {this.inputFocus(event, 'email')}}
			/>
			<textarea name="" id="" cols="30" rows="8" placeholder="What can I do for you?" ></textarea>
			</form>
			);
	}
}

export {ContactForm as default};
