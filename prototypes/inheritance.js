
require('../utils');

// from JavaScript: The Good Parts

// define a constructor and agument it's prototype
var Mammal = function(name) {
  this.name = name;
};

Mammal.prototype.get_name = function() {
  return this.name;
};

Mammal.prototype.says = function() {
  return this.saying || '';
};

// make a new instance
var myMammal = new Mammal('Herb the Mammal');
console.log('myMammel name: ', myMammal.get_name());

// create another pseudoclass that inherits from Mammal
var Cat = function(name) {
  this.name = name;
  this.saying = 'meow';
};

// Replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();

// Augment the new prototype with
// purr and get_name methods
Cat.prototype.purr = function(n) {
  var i, s = '';
  for (i = 0; i < n; i += 1) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
};

Cat.prototype.get_name = function() {
  return this.says() + ' ' + this.name + ' ' + this.says();
};

var myCat = new Cat('Henrietta');
console.log('myCat says: ', myCat.says());
console.log('myCat purr: ', myCat.purr(5));
console.log('myCat name: ', myCat.get_name());
