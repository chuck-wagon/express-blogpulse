'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    authorId: DataTypes.INTEGER
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    models.article.belongsTo(models.author)
  };
  return comment;
};