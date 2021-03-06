
const sendEmail = require('./email');
const Hapi = require('hapi');
const secret = require('./secret.json');


// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: process.env.PORT,
});

/* Register plugins */
server.register(require('vision'), (err) => {
    if (err) {
        console.log('Failed to load vision.');
    }
});

server.register({
    register: require('inert'),
}, (err) => {
    if (err) throw err;
});


server.views({
    engines: {
        html: require('handlebars'),
    },
    path: './client/views',
    layoutPath: './client/layouts',
    layout: 'default',
    // helpersPath: 'views/helpers',
    partialsPath: './client/partials',
});


// create your routes, currently it's just one
const routes = [
    {
        method: 'GET',
        path: '/',
        handler(request, reply) {
            const data = {
                title: 'Craig Pullar | Portfolio ',
                description: 'The portfolio of Craig Pullar. Here you will find examples of work and information on experience and how to get in touch.',
                favicon: '/images/logo.png',
            };

            return reply.view('index', data);
        },
    },
    {
        method: 'GET',
        path: '/js/{filename}',
        handler(request, reply) {
            reply.file(`./client/js/${request.params.filename}`);
        },
    },
    {
        method: 'GET',
        path: '/dist/{filename}',
        handler(request, reply) {
            reply.file(`./client/dist/${request.params.filename}`);
        },
    },
    {
        method: 'GET',
        path: '/css/{filename}',
        handler(request, reply) {
            reply.file(`./client/css/${request.params.filename}`);
        },
    },
    {
        method: 'GET',
        path: '/images/{filename}',
        handler(request, reply) {
            reply.file(`./client/images/${request.params.filename}`);
        },
    },
    {
        method: 'GET',
        path: '/images/sites/{filename}',
        handler(request, reply) {
            reply.file(`./client/images/sites/${request.params.filename}`);
        },
    },
    {
        method: 'POST',
        path: '/sendEmail',
        handler: (request, reply) => {
            const {
                email: from,
                name,
                message,
                optOut,
            } = request.payload;
            const { password: email_pass } = secret;
            sendEmail({
                email_pass,
                from,
                name,
                message,
                optOut,
            });
            reply({ status: 200 });
        },
    },
];

server.route(routes);


server.start((err) => {
    if (!err) console.log(`Server running at :${server.info.uri}`);
    else console.log(err);
});

