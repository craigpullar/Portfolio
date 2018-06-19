const formSubmit = ({ data, FIELD_KEYS }) => {
    const payload = {
        name: data[FIELD_KEYS.name],
        email: data[FIELD_KEYS.email],
        message: data[FIELD_KEYS.message],
        optOut: data[FIELD_KEYS.optOut],
    };

    return window.fetch('/sendEmail', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'content-type': 'application/json',
        },
    });
};

export default formSubmit;