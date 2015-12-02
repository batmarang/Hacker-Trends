var Sequelize = require('sequelize');

var StoryModel = {
  descendants : Sequelize.INTEGER,
  id :  {
    type : Sequelize.INTEGER,
    primaryKey : true
  },
  score : Sequelize.INTEGER,
  //text : Sequelize.STRING,
  time : Sequelize.INTEGER,
  title : Sequelize.STRING,
  type : Sequelize.STRING,
  url : Sequelize.STRING,
};

module.exports = StoryModel;
