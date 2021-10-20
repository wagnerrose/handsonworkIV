module.exports = function(app) {
  var modelNoticias = require('../models/modelNoticias.js');

  app.get('/noticias', function(req,res){
    var connection = app.config.dbConnection();
    var Noticias = modelNoticias(app);

    connection.sync().then(function() {
      Noticias.findAll().then(function(result) {
          res.render('noticias/noticias', {noticias: result});
      });
    });
  });
};


