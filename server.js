var Hapi = require('hapi');
var request = require('request');
var Sequelize = require('sequelize');
var config = require('config');
var storiesDb = require('./data/stories');
var commentsDb = require('./data/comments');

var StoryModel = require('./models/Story');
var CommentModel = require('./models/Comment');

//var Promise = require('bluebird');
//var request = Promise.promisifyAll(require('request'));
//var dbConfig = config.get('Database.dbConfig');

var sequelize = new Sequelize('postgres://localhost/hacker-news');
var Story = sequelize.define('stories', StoryModel);
var Comment = sequelize.define('comments', CommentModel);
Story.sync();
Comment.sync();


var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

// uncomment to generate database when server starts
//generateDatabase();

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, reply) {
    reply('Hello, world!');
  }
});

server.start(function () {
  console.log('Server running on: ', server.info.uri);
});

function generateDatabase() {
  for (var i = 121000; i < 122000; i++) {
    request.get(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`, function (err, response, body) {
      var body = JSON.parse(body);
      (body.type === 'story') ? addToStories(body) : addToComments(body);
    });
  }
}

// text for stories and comments > 255 chars. try to analyze trends beforehand
// instead of saving full text

function addToStories(story) {
  Story.findOrCreate({
    where : { id : story.id },
    defaults : {
      descendants : story.descendants,
      score : story.score,
      //text : story.text,
      time : story.time,
      title : story.title,
      type : story.type,
      url : story.url
    }
  });
}

function addToComments(comment) {
  Comment.findOrCreate({
    where : { id : comment.id },
    defaults : {
      parent : comment.parent,
      //text : comment.text,
      time : comment.time,
      title : comment.title,
      type : comment.type
    }
  });
}
