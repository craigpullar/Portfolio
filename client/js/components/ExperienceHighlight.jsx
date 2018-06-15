import React from 'react';

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


export default ExperienceHighlight;