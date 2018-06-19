import React from 'react';
import PropTypes from 'prop-types';

const smile = '../images/smile.svg';

const ThanksMessage = ({ isVisible }) => (
    <div className={`${!isVisible ? 'hidden' : ''} contact-form__thanks col-xs-12 col-sm-6 text-center`}>
        <p className="contact-form__thanks-content vertical-middle">
            <img
                src={smile}
                alt="smile icon"
            />
            <br />
            <br />Thank you.
            <br />I&#x27;ll be in touch soon.
        </p>
    </div>
);
ThanksMessage.propTypes = {
    isVisible: PropTypes.bool,
};

ThanksMessage.defaultProps = {
    isVisible: false,
};

export default ThanksMessage;