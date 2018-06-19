
import FIELD_KEYS from '../entities/formFieldKeys.json';

const isPresent = ({ inputValue }) => !!inputValue;

export const validateEmail = ({ inputValue }) => {
    // eslint-disable-next-line no-useless-escape
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regex.test(inputValue);
};

export const validateText = ({ inputValue }) => isPresent({ inputValue });

export const validateField = ({ form, fieldKey }) => {
    const inputValue = form.state.values[fieldKey];

    const isValidEmail = (fieldKey === FIELD_KEYS.email)
        ? validateEmail({ inputValue })
        : true;

    const isValid = isValidEmail && validateText({ inputValue });

    !isValid && form.setState(prevState => ({
        errors: {
            ...prevState.errors,
            [fieldKey]: true,
        },
    }));

    return isValid;
};