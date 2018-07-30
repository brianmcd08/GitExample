var http = require('http');
//var dt = require('./myfirstmodule');
//var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
	fs.readFile('demofile1.html', function(err, data) {
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	//var q = url.parse(req.url, true).query;
    	//var txt = q.year + " " + q.month;
    	//res.write('The date and time are currently ' + dt.myDateTime());
    	//res.write(req.url);
    	res.write(data);
    	res.end();
    });
}).listen(8080);
