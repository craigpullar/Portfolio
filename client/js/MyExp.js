import * as globals from "./globals";
import Experience from "./Experience";

import React from 'react';
import ReactDOM from 'react-dom';

class MyExp extends React.Component {
	render() {
		return (
			<div className="container-fluid experience text-center">
			<div className="row">
			<div className="col-sm-12">
			<h2>My Experience</h2>
			<p>Waking up at 5am gives me a lot of time to get things done.</p>
			<br/>
			<Experience title="/9" text="The name of my first site, which I built at 14" />
			<Experience title="COO" text="The position I held in my first startup" />
			<Experience title="2:1" text="The grade I graduated with in Computer Science" />
			<Experience title="100+" text="Projects I have worked on" />
			<Experience title="10" text="The number of programming languages I can write in" />
			<Experience title="2+" text="Years experience working on agile teams" />
			</div>
			</div>
			</div>
			);
		}
	}

	export {MyExp as default};
