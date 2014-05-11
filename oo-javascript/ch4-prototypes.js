
// Prototypes: a recipe for an object

var book = {
  title: 'The Principles of Object-Oriented JavaScript'
};

console.log('title', 'title' in book);
console.log(book.hasOwnProperty('title'));
console.log('hasOwnProperty', 'hasOwnProperty' in book);
console.log(book.hasOwnProperty('hasOwnProperty'));
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));
console.log('');

// deteremine if a property is on the prototype
function hasPrototypeProperty (object, name) {
  return name in object && !object.hasOwnProperty(name);
}

console.log(hasPrototypeProperty(book, 'title'));
console.log(hasPrototypeProperty(book, 'hasOwnProperty'));
console.log('');

// get the prototype using `Object.getPrototypeOf()`
var object = {};
var prototype = Object.getPrototypeOf(object);
console.log('prototype', prototype === Object.prototype);
console.log('');

// check to see if one object is a prototype of another
var object = {};
console.log(Object.prototype.isPrototypeOf(object));
console.log('');


// finding the value up the prototype chain
var object = {};
console.log(object.toString());

object.toString = function () {
  return '[object Custom]';
};
console.log(object.toString());

// delete own property
delete object.toString;
console.log(object.toString());

// no effect - delete only works on own properties
delete object.toString;
console.log(object.toString());

console.log('');
