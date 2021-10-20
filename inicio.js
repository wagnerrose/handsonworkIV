var http = require('http');

var server = http.createServer( function(req, res) {
    var pagina = req.url;
    if(pagina == '/tecnologia') {
        res.end("<html><body>notícias de tecnologia</body></html>");
    } else if( pagina == '/moda') {
      res.end("<html><body>Notícias de moda</body></html>");
    } else { 
      res.end("<html><body>Outras notícias</body></html>");
    };
});

server.listen(8080);