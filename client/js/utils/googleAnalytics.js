const GA_EVENT_TYPES = {
    click: 'click',
    submit: 'submit',
};

const GAEventCurried = ({ eventAction }) => 
    ({ eventCategory }) => {
        ga('send', 'event', {
            eventCategory,
            eventAction,
        });
    };

const convertEventTypeToFunction = ([ eventType, eventAction ]) => {
    GA_EVENT_TYPES[eventType] = GAEventCurried({ eventAction });
};

Object.entries(GA_EVENT_TYPES).forEach(convertEventTypeToFunction);

export default GA_EVENT_TYPES;