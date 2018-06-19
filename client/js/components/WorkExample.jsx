import React from 'react';
import PropTypes from 'prop-types';
import GAEvent from '../utils/googleAnalytics';

const WorkExample = ({
    className, link, animation, animationDelay,
}) => {
    const handleClick = (event) => {
        event.preventDefault();

        GAEvent.click({
            eventCategory: `Site - ${className}`,
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

WorkExample.propTypes = {
    className: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    animation: PropTypes.string.isRequired,
    animationDelay: PropTypes.string.isRequired,
};

export default WorkExample;