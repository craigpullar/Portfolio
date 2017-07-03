import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';

class MyWork extends React.Component {
	render() {
		return (
			<div className="row">
			<div className="col-sm-12">
			<h2>My Work</h2>
			</div>
			<div className="col-sm-4 site">
			<a href="https://www.homeaway.com/lp/vacation-equation/" target="_blank">
			<div className="view vacation-equation">
			</div>
			</a>
			</div>
			<div className="col-sm-4 site ">
			<a href="https://www.homeaway.co.uk/arlanda" target='_blank'>
			<div className="view arlanda">
			</div>
			</a>
			</div>
			<div className="col-sm-4 site ">
			<a href="https://www.homeaway.co.uk/info/halloween" target="_blank">
			<div className="view monstermas">
			</div>
			</a>
			</div>
			<div className="col-sm-4 site ">
			<a href="https://www.homeaway.com/lp/destination-races-VIP-upgrade/?" target="_blank">
			<div className="view destination-races">
			</div>
			</a>
			</div>
			<div className="col-sm-4 site ">
			<a href="http://picsol.co.uk/" target="_blank">
			<div className="view picsol">
			</div>
			</a>
			</div>
			<div className="col-sm-4 site ">
			<a href="https://www.hays.co.uk/jobs/mnn-ceo/index.htm" target="_blank">
			<div className="view mmn">
			</div>
			</a>
			</div>
			<div className="col-sm-12">
			<a href="" className="btn cta">More</a>
			</div>
			</div>
			);
	}
}

export {MyWork as default};
