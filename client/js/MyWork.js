import * as globals from "./globals";
import Site from "./Site";

import React from 'react';
import ReactDOM from 'react-dom';

class MyWork extends React.Component {
	render() {
		return (
			<div className="container-fluid light-grey work text-center">	
			<div className="row">
			<div className="col-sm-12">
			<h2>My Work</h2>
			</div>
			<Site 
			link="https://www.homeaway.com/lp/vacation-equation/" 
			class="vacation-equation" />
			<Site 
			link="https://www.homeaway.co.uk/arlanda" 
			class="arlanda" />
			<Site 
			link="https://www.homeaway.co.uk/info/halloween" 
			class="monstermas" />
			<Site 
			link="https://www.homeaway.com/lp/destination-races-VIP-upgrade/?" 
			class="destination-races" />
			<Site 
			link="http://picsol.co.uk/" 
			class="picsol" />
			<Site 
			link="https://www.hays.co.uk/jobs/mnn-ceo/index.htm" 
			class="mmn" />
			<div className="col-sm-12">
			<a href="" className="btn cta">More</a>
			</div>
			</div>
			</div>
			);
	}
}

export {MyWork as default};
