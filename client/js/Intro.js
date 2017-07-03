import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';

class Intro extends React.Component {
	render() {
		return (
			<div className="container-fluid intro text-center">
			<div className="row">
			<div className="col-sm-12">
			<div className="profile">
			</div>
			<h2>Craig Pullar</h2>
			<p>I design, build and market websites. <br/> I’m also pretty good at it.</p>
			<a href="" className="btn cta">Get in touch</a>
			</div>
			</div>
			</div>
			);
		}
	}

	export {Intro as default};
