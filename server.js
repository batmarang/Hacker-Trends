var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {

    reply('Hello, world!');
  }
});

server.start(function () {
  console.log('Server running on: ', server.info.uri);
});
