var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var x = 5;
    res.end('Hello World everybody ' + x + ' >>>')
}).listen(8080)