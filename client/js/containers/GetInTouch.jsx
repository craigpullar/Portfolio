import React from 'react';
import ContactForm from '../components/ContactForm';

const GetInTouch = () => (
    <div className="get-in-touch container-fluid">
        <div className="row">
            <div className="get-in-touch__form-wrapper col-sm-12">
                <h2 className="get-in-touch__title text-center">
                    Get in touch
                </h2>
                <div className="col-sm-6 match text-center">
                    <p className="vertical-middle">
                        Got and idea? Want to work with me? Or even just fancy a chat? Drop me a line by filling out the form and I’ll get back to you.
                    </p>
                </div>
                <ContactForm />
            </div>
        </div>
    </div>
);

export default GetInTouch;