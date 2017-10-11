
var fs = require('fs');
function thread(fn) {
  var gen = fn(42);
  function forw(err, res) {
    var ret = gen.next(res);
    if (ret.done) return;
    ret.value(forw);
  }
  
  forw();
}
thread(function *(x){
  var a = yield read('README.md');
  var b = yield read('prog1.js');
  console.log(a);
  console.log(b);
  console.log(x);
});
function read(path) {
  return function(done){
    fs.readFile(path, 'utf8', done);
  }
}

