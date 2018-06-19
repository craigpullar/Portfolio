import React from 'react';
import PropTypes from 'prop-types';

const ExperienceHighlight = ({
    animation, animationDelay, title, text,
}) => (
    <div
        className="experience-highlight col-sm-4 match"
        data-animation={animation}
        data-animation-delay={animationDelay}
    >
        <span className="experience-highlight__title">
            {title}
        </span>
        <br />
        <p>{text}</p>
    </div>
);

ExperienceHighlight.propTypes = {
    animation: PropTypes.string.isRequired,
    animationDelay: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default ExperienceHighlight;