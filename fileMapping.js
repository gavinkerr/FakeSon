//todo: rename fileMapping
module.exports = function (route, initDir){
  var parts = route.split('/'),
  file = parts[parts.length - 1],
  dir = route.substring(0, route.length - file.length - 1);
  initDir = initDir || __dirname;
  var fileplacement = {
    dir: initDir + '/' + dir,
    file: file + '.json'
  };
  fileplacement.fullpath = function () {
    return this.dir + '/' + this.file;
  };
  // idea for tempaltes in progress
  // fileplacement.templatePath = function () {
  //   var bits = dir.split('/');
  //   bits.pop();
  //   return initDir + '/' +  bits.join('/') + 'template.json';
  // };
  fileplacement.dirsStack = function () {
    var bits = dir.split('/');
    var dirs = [];
    var bit;
    while( bit = bits.pop())
      {
        dirs.push(initDir + '/' +  bits.join('/') + '/' + bit);
      }
    return dirs;
  };
  return fileplacement;
}
