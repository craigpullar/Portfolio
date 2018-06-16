import React from 'react';

const WorkExample = ({
    className, link, animation, animationDelay,
}) => {
    const handleClick = (event) => {
        event.preventDefault();

        ga('send', 'event', {
            eventCategory: `Site - ${className}`,
            eventAction: 'click',
        });

        const win = window.open(link, '_blank');
        win.focus();
    };

    return (
        <div
            className="work-example col-sm-4"
            data-animation={animation}
            data-animation-delay={animationDelay}
        >
            <a
                className="work-example__anchor"
                href={link}
                target="_blank"
                onClick={handleClick}
            >
                <div className={`work-example__view work-example__view--${className}`} />
            </a>
        </div>
    );
};

export default WorkExample;