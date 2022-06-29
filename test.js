var http = require('http')
const mtg = require('mtgsdk')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    mtg.card.find(4)
    .then(result => {
        res.end(result.card.name);
    })
}).listen(8080)