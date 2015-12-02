var Hapi = require('hapi');
var request = require('request');
var Sequelize = require('sequelize');
var config = require('config');
//var Promise = require('bluebird');
//var request = Promise.promisifyAll(require('request'));

var dbConfig = config.get('Database.dbConfig');

var sequelize = new Sequelize('postgres://localhost/hacker-news');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

generateDatabase();

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, reply) {
    // Eventually serve analysis of trends
    reply('Hello, world!');
  }
});

server.start(function () {
  console.log('Server running on: ', server.info.uri);
});

function generateDatabase() {
  for (var i = 121003; i < 121010; i++) {
    request.get(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`, function (err, response, body) {
      var body = JSON.parse(body);
      console.log(body);
    });
  }
}
