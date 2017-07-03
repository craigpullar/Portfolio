const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 8000 
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
            title: 'This is Index!',
            message: 'Hello, World. You crazy handlebars layout'
        };



        return reply.view('index', data);
    }
},
{
    method : 'GET',
    path: '/js/deploy.js',
    handler:function(request, reply) {
        reply.file('./client/js/deploy.js');
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
}
];

server.route(routes);



server.start((err) => {
    if (!err) console.log("Server running at :" + server.info.uri);
    else console.log(err); 
});





