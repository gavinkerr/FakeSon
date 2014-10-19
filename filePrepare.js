var fs = require('fs');

module.exports = function(mapping , callback){

  var writefile = function(){
    fs.writeFile(mapping.fullpath(), JSON.stringify({replace:'this'}),
    function (err) {
      if (err) throw err;
        callback(true);
      });
  }
  var makefile = function(){
    console.log('makefile')
    fs.exists(mapping.fullpath(), function (exists) {
      if(!exists)
      {
          writefile();
      }
      else{
        callback(false);
      }
    });
  }
  var makeAll = function(){
    var dir = dirs.pop();
    fs.mkdir(dir, function(e){
        if(!e || (e && e.code === 'EEXIST')){
          if(dirs.length){
              makeAll();
            }else{
              makefile();
            }
        } else {
            //debug
            console.log(e);
            if (e) throw e;
        }
    });

  }
  dirs = mapping.dirsStack();
  makeAll();
}
