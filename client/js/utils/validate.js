const isPresent = ({ inputValue }) => !inputValue;

export const FIELD_TYPES = {
    name: 0,
    email: 1,
    message: 2,
    optOut: 3
};

export const isValidEmail = ({ inputValue }) => {
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regex.test(inputValue);
};

export const isValidText = ({ inputValue }) => isPresent({ inputValue });

export const validateField = ({ form, fieldKey }) => {
    const inputValue = form.state.values[fieldKey];

    const isValidEmail = (fieldKey === FIELD_TYPES.email)
        ? isValidEmail({ inputValue })
        : true;

    const isValid = isValidEmail && isValidText({ inputValue });

    !isValid && form.setState(prevState => ({
        errors: {
            ...prevState.errors,
            [fieldKey]: true,
        }
    }));

    return isValid;
}