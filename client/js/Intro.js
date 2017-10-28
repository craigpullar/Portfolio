import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Intro extends React.Component {
	scrollToForm(event) {
		event.preventDefault();
		ga('send', 'event', {
			eventCategory: 'CTA - Get in Touch',
			eventAction: 'click'
		});
		document.querySelector('.form').scrollIntoView();
	}
	render() {
		return (
			<div className="container-fluid intro text-center">
			<div className="row">
			<div className="col-sm-12">

			<div className="profile">
			</div>
			<h2 data-animation="fadeInUp">Craig Pullar</h2>
			<p data-animation="fadeInUp">Designer and Full-stack Developer.<br/>Based in London.</p>
			<a href="" className="btn cta" onClick={this.scrollToForm}>Get in touch</a>
			</div>
			</div>
			</div>
			);
	}
}

export {Intro as default};
