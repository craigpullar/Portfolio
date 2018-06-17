import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({
    type, animation, animationDelay, text,
}) => (
    <div
        className={`skill--${type} skill`}
        data-animation={animation}
        data-animation-delay={animationDelay}
    >
        {text}
    </div>
);

Skill.propTypes = {
    type: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired,
    animationDelay: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Skill;