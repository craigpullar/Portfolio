import React from 'react';
import PropTypes from 'prop-types';

const send = '../images/send.svg';

const SubmitButton = ({
    isFormVisible,
    submitFormHandler,
}) => (
    <button
        href=""
        className={`${!isFormVisible ? 'hidden' : ''} btn contact-form__submit-button`}
        onClick={submitFormHandler}
    >
        Send
        <img
            className="contact-form__send-icon"
            src={send}
            alt="send icon"
        />
    </button>
);

SubmitButton.propTypes = {
    isFormVisible: PropTypes.bool,
    submitFormHandler: PropTypes.func.isRequired,
};

SubmitButton.defaultProps = {
    isFormVisible: false,
};

export default SubmitButton;