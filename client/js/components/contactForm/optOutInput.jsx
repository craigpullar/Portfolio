import React from 'react';
import PropTypes from 'prop-types';

const OptOutInput = ({
    handleChange,
}) => (
    <div className="relative">
        <input
            className="contact-form__input contact-form__input--opt-out"
            id="optOut"
            type="checkbox"
            name="optOut"
            onChange={handleChange}
        />
        <label
            htmlFor="#optOut"
            className="contact-form__label"
        >
            Please tick this box if you do not wish to be
                contacted with information on my products or services in the future.
        </label>
    </div>
);

OptOutInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
};

export default OptOutInput;