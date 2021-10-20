var Sequelize = require('sequelize');

module.exports = function(app) {
  const modelNoticia = app.config.dbConnection().define('noticia', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    noticia: Sequelize.STRING
  });
  return modelNoticia;
};