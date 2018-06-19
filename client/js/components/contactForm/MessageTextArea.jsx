import React from 'react';
import PropTypes from 'prop-types';

const MessageTextArea = ({
    fieldKey,
    handleInputChange,
    value,
    className,
}) => (
    <textarea
        name="message"
        id="message"
        cols="30"
        rows="8"
        data-field-key={fieldKey}
        placeholder="What can I do for you?"
        onChange={handleInputChange}
        value={value}
        className={`contact-form__text-area ${className}`}
    />
);

MessageTextArea.propTypes = {
    fieldKey: PropTypes.number.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
};

MessageTextArea.defaultProps = {
    className: '',
};

export default MessageTextArea;