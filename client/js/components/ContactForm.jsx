import React from 'react';
import $ from 'jquery';
import { validateField, FIELD_TYPES } from '../utils/validate';

const send = '../images/send.svg';
const smile = '../images/smile.svg';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: '',
            thanks: 'hidden',
            errors: {
                [FIELD_TYPES.name]: false,
                [FIELD_TYPES.email]: false,
                [FIELD_TYPES.message]: false,
            },
            values: {
                [FIELD_TYPES.name]: '',
                [FIELD_TYPES.email]: '',
                [FIELD_TYPES.message]: '',
                [FIELD_TYPES.optOut]: false,
            }
        };

        this.inputChange = this.inputChange.bind(this);
        this.inputFocus = this.inputFocus.bind(this);
    }

    inputFocus(event) {
        const id = event.currentTarget.getAttribute('id');
        if (!$(`#${id}`).val().length) { $(`#${id}`).toggleClass('focus'); }
    }

    submitForm(e) {
        e.preventDefault();

        if (!this.validate()) return false;

        self = this;


        const data = this.state.values;

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
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                optOut: !prevState.optOut,
            }
        }));
    }

    validate() {
        const {
            name, message, email,
        } = FIELD_TYPES;

        return [name, message, email].reduce((accum, key) => 
            accum && validateField({
                form: this,
                fieldKey: key,
            })
        , true);
    }

    inputChange(event) {
        const fieldType = event.currentTarget.getAttribute('data-field-type');
        const inputValue = event.target.value;
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                [fieldType]: inputValue,
            },
            errors: {
                ...prevState.errors,
                [fieldType]: false,
            }
        }));
    }

    render() {
        const {
            name,
            email,
            message
        } = FIELD_TYPES;

        return (
            <div className="contact-form row">
                <div className={`${this.state.form} col-sm-6 match`}>
                    <form action="">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            data-field-type={name}
                            onFocus={this.inputFocus}
                            onBlur={this.inputFocus}
                            onChange={this.inputChange}
                            value={this.state.values[name]}
                            className={`contact-form__input ${this.state.errors[name] ? 'error' : ''}`}
                        />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            data-field-type={email}
                            onFocus={this.inputFocus}
                            onBlur={this.inputFocus}
                            onChange={this.inputChange}
                            value={this.state.values[email]}
                            className={`contact-form__input ${this.state.errors[email] ? 'error' : ''}`}
                        />
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="8"
                            data-field-type={message}
                            placeholder="What can I do for you?"
                            onChange={this.inputChange}
                            value={this.state.values[message]}
                            className={`contact-form__text-area ${this.state.errors[message] ? 'error' : ''}`}
                        />
                        <div className="relative">
                            <input
                                className="contact-form__input contact-form__input--opt-out"
                                id="optOut"
                                type="checkbox"
                                name="optOut"
                                onChange={(e) => { this.optOutChange(); }}
                            />
                            <label className="contact-form__label">
                                Please tick this box if you do not wish to be
                                 contacted with information on my products or services in the future.
                            </label>
                        </div>
                    </form>
                </div>
                <a
                    href=""
                    className={`${this.state.form} btn contact-form__submit-button`}
                    onClick={(e) => { this.submitForm(e); }}
                >
                    Send
                    <img
                        className="contact-form__send-icon"
                        src={send}
                        alt="send icon"
                    />
                </a>
                <div className={`${this.state.thanks} contact-form__thanks col-xs-12 col-sm-6 text-center`}>
                    <p className="contact-form__thanks-content vertical-middle">
                        <img
                            src={smile}
                            alt="smile icon"
                        />
                        <br />
                        <br />Thank you.
                        <br />I'll be in touch soon.
                    </p>
                </div>
            </div>
        );
    }
}

export default ContactForm;