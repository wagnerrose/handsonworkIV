const port = 8080;
var app = require ('./config/server.js')();

app.listen(port, function(){
    console.log(`Servidor rodando em http://localhost:${port}`)
  });