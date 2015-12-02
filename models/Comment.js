var Sequelize = require('sequelize');

var CommentModel = {
  id :  {
    type : Sequelize.INTEGER,
    primaryKey : true
  },
  parent : Sequelize.INTEGER,
  //text : Sequelize.STRING,
  time : Sequelize.INTEGER,
  type : Sequelize.STRING,
};

module.exports = CommentModel;
