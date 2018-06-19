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

Object.entries(GA_EVENT_TYPES).forEach(([key, eventAction]) => {
    GA_EVENT_TYPES[key] = GAEventCurried({ eventAction })
});


export default GA_EVENT_TYPES;