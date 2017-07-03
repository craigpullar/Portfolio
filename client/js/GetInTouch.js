import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';

class GetInTouch extends React.Component {
	render() {
		return (
			<div className="row">
			<div className="col-sm-12">
			<h2>Get in touch</h2>
			<div className="col-sm-6 match">
			<p className="middle">Got and idea? Want to work with me? Or even just fancy a chat? Drop me a line by filling out the form and I’ll get back to you.</p>
			</div>
			<div className="col-sm-6 match">
			<form action="">
			<input type="text" placeholder="Name"/>
			<input type="email" placeholder="Email"/>
			<textarea name="" id="" cols="30" rows="8" placeholder="What can I do for you?" ></textarea>
			</form>
			</div>
			<a href="" className="btn cta">Send <img src="./images/send.svg" /></a>
			</div>
			</div>
			);
	}
}

export {GetInTouch as default};
