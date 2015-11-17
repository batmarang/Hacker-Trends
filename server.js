var Hapi = require('hapi');
var server = new Hapi.server(3000);

server.start(function () {
  console.log('Server running on: ', server.info.uri);
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});