/* Main */
import * as globals from "./globals";
import * as components from "./components";
import Nav from './nav.js';
import MyWork from './MyWork.js';
import MyExp from './MyExp.js';
import GetInTouch from './GetInTouch.js';
import Intro from './Intro.js';
import Footer from './Footer.js';



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
			<Nav />
			<Intro />
			<MyWork />
			<MyExp />
			<GetInTouch />
			<Footer />
			</div>
			);
		}
	}

	ReactDOM.render(<Page />, document.getElementById('app'));





