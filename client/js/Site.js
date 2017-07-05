import * as globals from "./globals";
import React from 'react';
import ReactDOM from 'react-dom';

class Site extends React.Component {
	render() {
		return (
			<div className="col-sm-4 site">
			<a href={this.props.link} target="_blank">
			<div className={this.props.class+" view" }>
			</div>
			</a>
			</div>
			);
		}
	}

	export {Site as default};
