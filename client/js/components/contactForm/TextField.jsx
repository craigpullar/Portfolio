import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
    handleInputChange,
    handleInputFocus,
    fieldKey,
    value,
    id,
    placeholder,
    className,
    type,
}) => (
    <input
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        data-field-key={fieldKey}
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
        onChange={handleInputChange}
        value={value}
        className={`contact-form__input ${className}`}
    />
);

TextField.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleInputFocus: PropTypes.func.isRequired,
    fieldKey: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
};

TextField.defaultProps = {
    className: '',
    type: 'text',
};

export default TextField;