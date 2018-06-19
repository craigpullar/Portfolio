import React from 'react';
import FIELD_KEYS from '../entities/formFieldKeys.json';
import { validateField } from '../utils/validate';
import { formSubmit } from '../utils/formSubmit';
import TextField from '../components/contactForm/TextField';
import MessageTextArea from '../components/contactForm/MessageTextArea';
import OptOutInput from '../components/contactForm/optOutInput';
import SubmitButton from '../components/contactForm/SubmitButton';
import ThanksMessage from '../components/contactForm/ThanksMessage';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.defaultFocusState = {
            [FIELD_KEYS.name]: false,
            [FIELD_KEYS.email]: false,
            [FIELD_KEYS.message]: false,
        };

        this.state = {
            isFormVisible: true,
            isThanksVisible: false,
            errors: {
                [FIELD_KEYS.name]: false,
                [FIELD_KEYS.email]: false,
                [FIELD_KEYS.message]: false,
            },
            values: {
                [FIELD_KEYS.name]: '',
                [FIELD_KEYS.email]: '',
                [FIELD_KEYS.message]: '',
                [FIELD_KEYS.optOut]: false,
            },
            focus: { ...this.defaultFocusState },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleFormError = this.handleFormError.bind(this);
        this.handleFormSuccess = this.handleFormSuccess.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleOptOutChange = this.handleOptOutChange.bind(this);
    }

    handleInputFocus(event) {
        const fieldKey = event.currentTarget.getAttribute('data-field-key');
        this.setState({
            focus: {
                ...this.defaultFocusState,
                [fieldKey]: true,
            },
        });
    }

    submitForm(e) {
        e.preventDefault();

        if (!this.validate()) return false;

        ga('send', 'event', {
            eventCategory: 'Contact form submit',
            eventAction: 'submit',
        });

        formSubmit({
            data: this.state.values,
            FIELD_KEYS,
        }).then(this.handleFormSuccess)
            .catch(this.handleFormError);
    }

    handleFormSuccess() {
        this.setState({
            isFormVisible: false,
            isThanksVisible: true,
        });
    }

    handleFormError() {
        this.setState({
            isFormVisible: false,
            isThanksVisible: true,
        });
    }

    handleOptOutChange() {
        const { optOut } = FIELD_KEYS;
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                [optOut]: !prevState.values[optOut],
            },
        }));
    }

    validate() {
        const {
            name, message, email,
        } = FIELD_KEYS;

        return [name, email, message].reduce(
            (accum, fieldKey) =>
                accum && validateField({
                    form: this,
                    fieldKey,
                })
            , true,
        );
    }

    handleInputChange(event) {
        const fieldKey = event.currentTarget.getAttribute('data-field-key');
        const inputValue = event.target.value;

        this.setState(prevState => ({
            values: {
                ...prevState.values,
                [fieldKey]: inputValue,
            },
            errors: {
                ...prevState.errors,
                [fieldKey]: false,
            },
        }));
    }

    render() {
        const {
            name,
            email,
            message,
        } = FIELD_KEYS;

        const getFocusClassForKey = key => (this.state.focus[key]
            ? 'focus'
            : '');
        const getErrorClassForKey = key => (this.state.errors[key]
            ? 'error'
            : '');

        return (
            <div className="contact-form row">
                <div className={`
                    ${!this.state.isFormVisible ? 'hidden' : ''}
                    col-sm-6 match
                `}
                >
                    <form action="">
                        <TextField
                            id="name"
                            placeholder="Name"
                            fieldKey={name}
                            handleInputFocus={this.handleInputFocus}
                            handleInputChange={this.handleInputChange}
                            value={this.state.values[name]}
                            className={`
                                ${getErrorClassForKey(name)}
                                ${getFocusClassForKey(name)}
                            `}
                        />
                        <TextField
                            id="email"
                            type="email"
                            placeholder="Email"
                            fieldKey={email}
                            handleInputFocus={this.handleInputFocus}
                            handleInputChange={this.handleInputChange}
                            value={this.state.values[email]}
                            className={`
                                ${getErrorClassForKey(email)}
                                ${getFocusClassForKey(email)}
                            `}
                        />
                        <MessageTextArea
                            fieldKey={message}
                            handleInputChange={this.handleInputChange}
                            value={this.state.values[message]}
                            className={`
                                ${getErrorClassForKey(message)}
                                ${getFocusClassForKey(message)}
                            `}
                        />
                        <OptOutInput
                            handleChange={this.handleOptOutChange}
                        />
                    </form>
                </div>
                <SubmitButton
                    submitFormHandler={this.submitForm}
                    isFormVisible={this.state.isFormVisible}
                />
                <ThanksMessage
                    isVisible={this.state.isThanksVisible}
                />
            </div>
        );
    }
}

export default ContactForm;