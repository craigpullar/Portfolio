import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';



class GetInTouch extends React.Component {
	render() {
		return (
			<div className="container-fluid form ">
			<div className="row">
			<div className="col-sm-12 form-cont">
			<h2 class="text-center">Get in touch</h2>
			<div className="col-sm-6 match text-center">
			<p className="middle idea">Got and idea? Want to work with me? Or even just fancy a chat? Drop me a line by filling out the form and I’ll get back to you.</p>
			</div>
			<ContactForm />
			</div>
			</div>
			</div>
			);
	}
}

export {GetInTouch as default};
