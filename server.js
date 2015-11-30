var Hapi = require('hapi');
var http = require('http');
var Promise = require('bluebird');
//var request = require('request');

// problem : the API presents the posts in the form of ids. in order to get the text, urls, etc
// we'd need to make as many request as there are posts.

var request = Promise.promisifyAll(require('request'));

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, reply) {

    //Makes request to Hacker News API for top news items
    request.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', function(err, response, body) {
        if (!err && response.statusCode === 200) {
          var body = JSON.parse(body);
          // 500 is the default #responses returned by the API.
          // TODO: Find out how to limit API request
          var results = body.slice(500-5);
          console.log(results);

          results.forEach(function (elem) {
            console.log(elem);
          });

        }
      });
    // request.getAsync('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      // .then(function(result) {
      //     console.log('yo', result.req.res.request);
      //     if (!err && res.statusCode === 200) {
      //       var body = JSON.parse(body);
      //       // 500 is the default #responses returned by the API.
      //       // TODO: Find out how to limit API request
      //       results = body.slice(500-5);
      //       console.log(results);
      //     }
      //   });
    reply('Hello, world!');
  }
});

server.start(function () {
  console.log('Server running on: ', server.info.uri);
});
