import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import send from '../images/send.svg';
import smile from "../images/smile.svg";


class ContactForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : '',
			email : '',
			message : '',
			form : '',
			thanks : 'hidden',
			name_error: '',
			email_error: '',
			message_error: '',
			optOut: false
		}
	}
	inputFocus(event, id) {
		if(!$(`#${id}`).val().length)
			$(`#${id}`).toggleClass('focus');
	}
	submitForm(e) {
		e.preventDefault();
		if (!this.validate()) return false;
		self = this;


		var data = {
			name: this.state.name,
			email: this.state.email,
			message: this.state.message,
			optOut: this.state.optOut
		}	
		ga('send', 'event', {
			eventCategory: `Contact form submit`,
			eventAction: 'submit'
		});
		$.ajax({
			type: 'POST',
			url: '/sendEmail',
			data: data
		})
		.done(function(data) {
			self.setState({
				form : 'hidden',
				thanks : ''
			});
			$('.form .col-sm-6').hide();
			$('.form .cta').hide();
		})
		.fail(function(jqXhr) {
			self.setState({
				form : 'hidden',
				thanks : ''
			});
			$('.form .col-sm-6').hide();
			$('.form .cta').hide();
		});

	}
	optOutChange() {
		this.setState({optOut : !this.setState.optOut});
	}
	validate() {
		let name = this.state.name;
		let email = this.state.email;
		let message = this.state.message;
		let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

		let pass = true;
		if(!name) {
			this.setState({name_error : 'error'});
			pass = false;
		}
		if(!email) {
			this.setState({email_error : 'error'});
			pass = false;
		} else if (!regex.test(email)) {
			this.setState({email_error : 'error'});
			pass = false;
		}
		if(!message) {
			this.setState({message_error : 'error'});
			pass = false;
		}
		return pass;

	}
	inputChange(event,id) {
		this.setState({
			[id] : event.target.value,
			[id + '_error'] : ''
		});
	}
	render() {
		return (
			<div>
			<div className="col-sm-6 match">
			<form action="" className={this.state.form} >
			<input id="name" type="text" name="name" placeholder="Name"
			onFocus={() => {this.inputFocus(event, 'name')}}
			onBlur={() => {this.inputFocus(event, 'name')}}
			onChange={(event)=>{this.inputChange(event,'name')}}
			value={this.state.name}
			className={this.state.name_error}
			/>
			<input id="email" type="email" name="email" placeholder="Email" 
			onFocus={() => {this.inputFocus(event, 'email')}}
			onBlur={() => {this.inputFocus(event, 'email')}}
			onChange={(event)=>{this.inputChange(event,'email')}}
			value={this.state.email}
			className={this.state.email_error}
			/>
			<textarea name="message" id="message" cols="30" rows="8" placeholder="What can I do for you?"
			onChange={(event)=>{this.inputChange(event,'message')}}
			value={this.state.message}
			className={this.state.message_error}></textarea>
			<div className="relative">
			<input  id="optOut" type="checkbox" name="optOut" onChange={(event) => {this.optOutChange()}} /> <label>Please tick this box if you do not wish to be
			contacted with information on my products or services in the future.</label>
			</div>
			</form>
			</div>
			<a href="" className={this.state.form + " btn cta"} onClick={(e)=>{this.submitForm(e)}}>Send <img src={send} /></a>
			<div className={this.state.thanks +" thanks col-sm-12"}>
			<p className="text-center"> 
			<img src={smile} /><br/>
			<br/>Thank you. <br/>I'll be in touch soon.
			</p>
			</div>
			</div>


			);
		}
	}

	export {ContactForm as default};
