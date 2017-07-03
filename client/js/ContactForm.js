import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';

class ContactForm extends React.Component {
	render() {
		return (
			<form action="">
			<input type="text" placeholder="Name"/>
			<input type="email" placeholder="Email"/>
			<textarea name="" id="" cols="30" rows="8" placeholder="What can I do for you?" ></textarea>
			</form>
			);
	}
}

export {ContactForm as default};
