import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Intro extends React.Component {
	scrollToForm(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $('.form').offset().top-50},
			500, function() {
				$('form input:first-of-type').focus();
			});
	}
	render() {
		return (
			<div className="container-fluid intro text-center">
			<div className="row">
			<div className="col-sm-12">
			<div className="profile">
			</div>
			<h2>Craig Pullar</h2>
			<p>I design, build and market websites. <br/> I’m also pretty good at it.</p>
			<a href="" className="btn cta" onClick={this.scrollToForm}>Get in touch</a>
			</div>
			</div>
			</div>
			);
	}
}

export {Intro as default};
