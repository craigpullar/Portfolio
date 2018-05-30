import Experience from "./Experience";
import React from 'react';
import ReactDOM from 'react-dom';

class MyExp extends React.Component {
	render() {
		return (
			<div className="container-fluid experience text-center">
			<div className="row">
			<div className="col-sm-12">
			<h2 data-animation="fadeInUp">My Experience</h2>
			<div className="slick">
			<Experience title="/9" text="The name of my first site, which I built at 14" 
			animation="fadeInUp"
			animationDelay="0"/>
			<Experience title="COO" text="The position I held in my first startup" 
			animation="fadeInUp"
			animationDelay="00"/>
			<Experience title="2:1" text="The grade I graduated with in Computer Science" 
			animation="fadeInUp"
			animationDelay="00"/>
			<Experience title="100+" text="Projects I have worked on" 
			animation="fadeInUp"
			animationDelay="0"/>
			<Experience title="10" text="The number of programming languages I can write in" 
			animation="fadeInUp"
			animationDelay="0"/>
			<Experience title="2+" text="Years experience working on agile teams" 
			animation="fadeInUp"
			animationDelay="0"/>
			</div>
			</div>
			</div>
			</div>
			);
	}
}

export {MyExp as default};
