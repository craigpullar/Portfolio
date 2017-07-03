import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';

class MyExp extends React.Component {
	render() {
		return (
			<div className="row">
			<div className="col-sm-12">
			<h2>My Experience</h2>
			<p>Waking up at 5am gives me a lot of time to get things done.</p>
			<br/>
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
			);
	}
}

export {MyExp as default};
