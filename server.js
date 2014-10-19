var fs = require('fs');
var http = require('http');
var url = require('url');
var fileMapping = require('./fileMapping');
var filePrepare = require('./filePrepare');
var port = process.argv[2] || 2121;
var directory = process.argv[3] || (__dirname + "/data");
console.log('starting on port ' + port + ' data directory = ' + directory);


server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  console.log(parsedUrl.pathname);
  var mapping = fileMapping(parsedUrl.pathname, directory);
  filePrepare(mapping, function(){
    response.writeHead(200, {"Content-Type": "application/json"});
    fs.createReadStream(mapping.fullpath()).pipe(response);
  });
});
server.listen(port);
