import React from 'react';

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

export default Skill;