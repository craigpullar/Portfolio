import React from 'react';
import $ from 'jquery';

const Intro = () => {
    const scrollToForm = (event) => {
        event.preventDefault();

        ga('send', 'event', {
            eventCategory: 'CTA - Get in Touch',
            eventAction: 'click',
        });

        document.querySelector('.contact-form').scrollIntoView();
    };

    return (
        <div className="container-fluid intro text-center">
            <div className="row">
                <div className="col-sm-12">
                    <div className="intro__profile" />
                    <h2 data-animation="fadeInUp">
                        Craig Pullar
                    </h2>
                    <p data-animation="fadeInUp">
                        Front-End Web Developer.<br />
                        Based in Toronto.
                    </p>
                    <a
                        href=""
                        className="btn btn--get-in-touch"
                        onClick={scrollToForm}
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;