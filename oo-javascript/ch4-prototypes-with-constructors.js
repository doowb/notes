
function Person (name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

var person1 = new Person('Brian');
var person2 = new Person('Jon');

console.log('person1.name', person1.name);
console.log('person2.name', person2.name);

person1.sayName();
person2.sayName();

console.log('');


// be careful with storing data values on the prototype
function Person (name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

Person.prototype.favorites = [];

var person1 = new Person('Brian');
var person2 = new Person('Jon');

person1.favorites.push('pizza');
person2.favorites.push('quinos');

console.log('person1', person1.favorites);
console.log('person2', person2.favorites);
console.log('');


// use an object literal to setup the prototype
function Person (name) {
  this.name = name;
}

Person.prototype = {
  sayName: function () {
    console.log(this.name);
  },
  toString: function () {
    return '[Person ' + this.name + ']';
  }
};

// beware of side effect
var person1 = new Person('Brian');
console.log(person1 instanceof Person);
console.log(person1.constructor === Person);
console.log(person1.constructor === Object);
console.log('');

// make sure to reassign the Person object to the constructor
function Person (name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
  },
  toString: function () {
    return '[Person ' + this.name + ']';
  }
};

var person1 = new Person('Brian');
var person2 = new Person('Jon');

console.log(person1 instanceof Person);
console.log(person1.constructor === Person);
console.log(person1.constructor === Object);
console.log('');

console.log(person2 instanceof Person);
console.log(person2.constructor === Person);
console.log(person2.constructor === Object);
console.log('');

// Changing prototypes
function Person (name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
  },
  toString: function () {
    return '[Person ' + this.name + ']';
  }
};
var person1 = new Person('Brian');
var person2 = new Person('Jon');

console.log('sayHi' in person1);
console.log('sayHi' in person2);

Person.prototype.sayHi = function () {
  console.log('Hi');
};

person1.sayHi();
person2.sayHi();
console.log('');

// freezing objects
var person1 = new Person('Brian');
var person2 = new Person('Jon');

Object.freeze(person1);

Person.prototype.sayHowdy = function () {
  console.log('Howdy');
};

person1.sayHowdy();
person2.sayHowdy();
console.log('');


