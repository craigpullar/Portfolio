/* Main */
import * as globals from "./globals";
import * as components from "./components";

import React from 'react';
import ReactDOM from 'react-dom';

class Page extends React.Component {
	render() {
		return (
			<div>
			<div className="container-fluid dark-blue header text-center">
			<div className="row">
			<div className="col-sm-12">
			<nav>
			<li>
			<img />
			</li>
			<li>
			My work
			</li>
			<li>
			My experience
			</li>
			<li>
			Get in touch
			</li>
			</nav>
			</div>
			</div>
			</div>
			<div className="container-fluid intro text-center">
			<div className="row">
			<div className="col-sm-12">
			<img />
			<h2>Craig Pullar</h2>
			<p>I design, build and market websites. <br/> I’m also pretty good at it.</p>
			<a href="" className="btn cta">Get in touch</a>
			</div>
			</div>
			</div>
			<div className="container-fluid light-grey work text-center">
			<div className="row">
			<div className="col-sm-12">
			<h2>My Work</h2>
			</div>
			<div className="col-sm-4 site"></div>
			<div className="col-sm-4 site"></div>
			<div className="col-sm-4 site"></div>
			<div className="col-sm-4 site"></div>
			<div className="col-sm-4 site"></div>
			<div className="col-sm-4 site"></div>
			<div className="col-sm-12">
			<a href="" className="btn cta">More</a>
			</div>
			</div>
			</div>
			<div className="container-fluid experience text-center">
			<div className="row">
			<div className="col-sm-12">
			<h2>My Experience</h2>
			<p>Waking up at 5am gives me a lot of time to get things done.</p>
			<div className="col-sm-4 poe">
			<span className="title">/9</span>
			<br/>
			<p>The name of my first site, which I built at 14</p>
			</div>
			<div className="col-sm-4 poe">
			<span className="title">COO</span>
			<br/>
			<p>The position I held in my first startup</p>
			</div>
			<div className="col-sm-4 poe">
			<span className="title">2:1</span>
			<br/>
			<p>The grade I graduated with in Computer Science</p>
			</div>
			<div className="col-sm-4 poe">
			<span className="title">100+</span>
			<br/>
			<p>Projects I have worked on</p>
			</div>
			<div className="col-sm-4 poe">
			<span className="title">10</span>
			<br/>
			<p>The number of programming languages I can write in</p>
			</div>
			<div className="col-sm-4 poe">
			<span className="title">2+</span>
			<br/>
			<p>Years experience working on agile teams</p>
			</div>
			</div>
			</div>
			</div>
			<div className="container-fluid form text-center">
			<div className="row">
			<div className="col-sm-12">
			<h2>Get in touch</h2>
			<div className="col-sm-6">
			Got and idea? Want to work with me? Or even just fancy a chat? Drop me a line by filling out the form and I’ll get back to you.
			</div>
			<div className="col-sm-6">
			<form action="">
			<input type="text"/>
			<input type="text"/>
			<textarea name="" id="" cols="30" rows="10"></textarea>
			</form>
			</div>
			<a href="" className="btn cta">Send</a>
			</div>
			</div>
			</div>
			<footer className="text-center">
			© Craig Pullar 2017
			</footer>
			</div>
			);
	}
}

ReactDOM.render(<Page />, document.getElementById('app'));





