
var email = require('./email');
const Hapi = require('hapi');
var secret = require('./secret.json');


// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: process.env.PORT 
});

// r = require('rethinkdb');

// var connection = null;
// r.connect( {host: 'localhost', port: 28015, password:''}, function(err, conn) {
//     if (err) console.log(err);
//     connection = conn;
// });

/* Register plugins */
server.register(require('vision'), (err) => {

    if (err) {
        console.log("Failed to load vision.");
    }
});
server.register({  
  register: require('inert')
}, function(err) {
  if (err) throw err
});


server.views({  
    engines: {
        html: require('handlebars')
    },
    path: './client/views',
    layoutPath: './client/layouts',
    layout: 'default',
    //helpersPath: 'views/helpers',
    partialsPath: './client/partials'
});


// create your routes, currently it's just one
var routes = [  
{
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        var data = {
            title: 'Craig Pullar | Portfolio ',
            description: 'The portfolio of Craig Pullar. Here you will find examples of work and information on experience and how to get in touch.',
            favicon: '/images/logo.png'
        };

        return reply.view('index', data);
    }
},
{
    method : 'GET',
    path: '/js/{filename}',
    handler:function(request, reply) {
        reply.file(`./client/js/${request.params.filename}`);
    }
},
{
    method : 'GET',
    path: '/dist/{filename}',
    handler:function(request, reply) {
        reply.file(`./client/dist/${request.params.filename}`);
    }
},
{
    method : 'GET',
    path: '/css/{filename}',
    handler:function(request, reply) {
        reply.file(`./client/css/${request.params.filename}`);
    }
},
{
    method: 'GET',
    path: '/images/{filename}',
    handler:function(request, reply) {
     reply.file(`./client/images/${request.params.filename}`);
 }
},
{
    method: 'GET',
    path: '/images/sites/{filename}',
    handler:function(request, reply) {
        reply.file(`./client/images/sites/${request.params.filename}`);
    }
},
{
    method: 'POST',
    path: '/sendEmail',
    handler: function(request, reply) {
        reply(email(secret.password, request.payload.email, request.payload.name, request.payload.message, request.payload.optOut));
    }
}
];

server.route(routes);



server.start((err) => {
    if (!err) console.log("Server running at :" + server.info.uri);
    else console.log(err); 
});





