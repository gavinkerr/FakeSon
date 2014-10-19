var fileMapping = require('./fileMapping');
var filePrepare = require('./filePrepare');

 var mapping = fileMapping('bla/hello/yo/tested');

 filePrepare(mapping, function(){
   console.log('ok');
 })
