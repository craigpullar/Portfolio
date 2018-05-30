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
							<Experience
								title="/9"
								text="The name of my first site, which I built at 14" 
								animation="fadeInUp"
								animationDelay="0"
							/>
							<Experience
								title="1 to 1000"
								text="I've worked in all range of business sizes" 
								animation="fadeInUp"
								animationDelay="00"
							/>
							<Experience
								title="2:1"
								text="The grade I graduated with in Computer Science" 
								animation="fadeInUp"
								animationDelay="00"
							/>
							<Experience
								title="100+"
								text="Projects I have worked on" 
								animation="fadeInUp"
								animationDelay="0"
							/>
							<Experience 
								title="3"
								text="The number of agile teams I've worked in" 
								animation="fadeInUp"
								animationDelay="0"
							/>
							<Experience
								title="4+"
								text="Years experience of professional Web Development" 
								animation="fadeInUp"
								animationDelay="0"
							/>
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export {MyExp as default};
