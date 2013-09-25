require('../utils');

Function.method('inherits', function(Parent) {
  this.prototype = new Parent();
  return this;
});

var Mammal = function(name) {
  this.name = name;
}
.method('get_name', function() { return this.name; })
.method('says', function() { return this.saying || ''; });

var Cat = function(name) {
  this.name = name;
  this.saying = 'meow';
}
.inherits(Mammal)
.method('purr', function(n) {
  var i, s = '';
  for (i = 0; i < n; i += 1) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
})
.method('get_name', function() { return this.says() + ' ' + this.name + ' ' + this.says(); });

var myMammal = new Mammal('Herb the Mammal');
console.log('myMammel name: ', myMammal.get_name());

var myCat = new Cat('Henrietta');
console.log('myCat says: ', myCat.says());
console.log('myCat purr: ', myCat.purr(5));
console.log('myCat name: ', myCat.get_name());
