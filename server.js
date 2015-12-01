var Hapi = require('hapi');
//var http = require('http');
var cheerio = require('cheerio');
//var Promise = require('bluebird');
var request = require('request');
var $;

// problem : the API presents the posts in the form of ids. in order to get the text, urls, etc
// we'd need to make as many request as there are posts.

//var request = Promise.promisifyAll(require('request'));

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

// server should automatically pull the 30 items from the front page of HN every
// hour, and save it into a SQL database.
// ignore comments for now. we want to extract keywords, counting the number of
// times they appear over time. we're also interested in the websites that are
// linked.

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, reply) {

    request.get('https://news.ycombinator.com/news', function (err, response, body) {
      $ = cheerio.load(body);

      $('.athing').each(function (tr_index, tr){
        //console.log($(this).html());
        console.log(tr_index);
        var anchors = $(this).find('a').toArray();

        console.log('title',anchors[1].children[0].data);
        console.log('full link:',anchors[1].attribs.href);
        //console.log('source site:',anchors[2].attribs.hred);

        //console.log($(this).find('a').first().html());
        $(this).find('a').each(function () {
          console.log($(this).text());
        });
          console.log(' ');
        //console.log('TR_INDEX '+tr_index, $(this).find('a').length);
      });

      // for (var i = 0; i < athingList.length; i++) {
      //   console.log(athingList[i]);
      // }

      // console.log(Object.keys(athingList[0]));
      // console.log(athingList[0].attribs);

    });

    reply('Hello, world!');
  }
});

server.start(function () {
  console.log('Server running on: ', server.info.uri);
});
