import React from 'react';
import $ from 'jquery';

const send = '../images/send.svg';
const smile = '../images/smile.svg';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      form: '',
      thanks: 'hidden',
      name_error: '',
      email_error: '',
      message_error: '',
      optOut: false,
    };
  }
  inputFocus(event, id) {
    if (!$(`#${id}`).val().length) { $(`#${id}`).toggleClass('focus'); }
  }
  submitForm(e) {
    e.preventDefault();
    if (!this.validate()) return false;
    self = this;


    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      optOut: this.state.optOut,
    };
    ga('send', 'event', {
      eventCategory: 'Contact form submit',
      eventAction: 'submit',
    });
    $.ajax({
      type: 'POST',
      url: '/sendEmail',
      data,
    })
      .done((data) => {
        self.setState({
          form: 'hidden',
          thanks: '',
        });
      })
      .fail((jqXhr) => {
        self.setState({
          form: 'hidden',
          thanks: '',
        });
      });
  }
  optOutChange() {
    this.setState({ optOut: !this.setState.optOut });
  }
  validate() {
    const name = this.state.name;
    const email = this.state.email;
    const message = this.state.message;
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    let pass = true;
    if (!name) {
      this.setState({ name_error: 'error' });
      pass = false;
    }
    if (!email) {
      this.setState({ email_error: 'error' });
      pass = false;
    } else if (!regex.test(email)) {
      this.setState({ email_error: 'error' });
      pass = false;
    }
    if (!message) {
      this.setState({ message_error: 'error' });
      pass = false;
    }
    return pass;
  }
  inputChange(event, id) {
    this.setState({
      [id]: event.target.value,
      [`${id}_error`]: '',
    });
  }
  render() {
    return (
      <div className='contact-form row'>
        <div className={`${this.state.form} col-sm-6 match`}>
          <form action="">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onFocus={(e) => { this.inputFocus(e, 'name'); }}
              onBlur={(e) => { this.inputFocus(e, 'name'); }}
              onChange={(e) => { this.inputChange(e, 'name'); }}
              value={this.state.name}
              className={`contact-form__input ${this.state.name_error}`}
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onFocus={(e) => { this.inputFocus(e, 'email'); }}
              onBlur={(e) => { this.inputFocus(e, 'email'); }}
              onChange={(e) => { this.inputChange(e, 'email'); }}
              value={this.state.email}
              className={`contact-form__input ${this.state.email_error}`}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="8"
              placeholder="What can I do for you?"
              onChange={(e) => { this.inputChange(e, 'message'); }}
              value={this.state.message}
              className={`contact-form__text-area ${this.state.message_error}`}
            />
            <div className="relative">
              <input className="contact-form__input contact-form__input--opt-out" id="optOut" type="checkbox" name="optOut" onChange={(e) => { this.optOutChange(); }} />
              <label className="contact-form__label">Please tick this box if you do not wish to be
			contacted with information on my products or services in the future.
                                                                                                             </label>
            </div>
          </form>
        </div>
        <a href="" className={`${this.state.form} btn contact-form__submit-button`} onClick={(e) => { this.submitForm(e); }}>
          Send <img className="contact-form__send-icon" src={send} />
        </a>
        <div className={`${this.state.thanks} contact-form__thanks col-xs-12 col-sm-6 text-center`}>
          <p className="contact-form__thanks-content vertical-middle">
            <img src={smile} /><br />
            <br />Thank you. <br />I'll be in touch soon.
          </p>
        </div>
      </div>
    );
  }
}

export { ContactForm as default };
