var connect = require('connect');
serveStatic = require('serve-static');

var app =  connect();
app.use(serveStatic("SportsStore"));
app.listen(5000);
//connect.createServer(connect.static("../SportsStore")).listen(5000);