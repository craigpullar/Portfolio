/* Main */
import * as globals from "./globals";
import * as components from "./components";
import Nav from './nav.js';
import MyWork from './MyWork.js';
import MyExp from './MyExp.js';
import GetInTouch from './GetInTouch.js';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import matchHeight from 'jquery-match-height';

$(function(){
	$('.match').matchHeight();
});





class Page extends React.Component {
	render() {
		return (
			<div>
			<div className="container-fluid dark-blue header text-center">
			<Nav />
			</div>
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
			<div className="container-fluid light-grey work text-center">	
			<MyWork />
			</div>
			<div className="container-fluid experience text-center">
			<MyExp />
			</div>
			<div className="container-fluid form text-center">
			<GetInTouch />
			</div>
			<footer className="text-center">
			© Craig Pullar 2017
			</footer>
			</div>
			);
		}
	}

	ReactDOM.render(<Page />, document.getElementById('app'));





