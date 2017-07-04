/* Main */
import * as globals from "./globals";
import Nav from './nav.js';
import MyWork from './MyWork.js';
import MyExp from './MyExp.js';
import GetInTouch from './GetInTouch.js';
import Intro from './Intro.js';
import Footer from './Footer.js';



import React from 'react';
import ReactDOM from 'react-dom';


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

export {Page as default};





