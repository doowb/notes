
// constructor is a function used with `new`
// constructor names should begin with a capital letter
function Person () {
  // intentionally empty
}

var person1 = new Person();
var person2 = new Person();

// can omit parentheses when no params are passed
var person1 = new Person;
var person2 = new Person;


// can use instanceof
console.log(person1 instanceof Person);
console.log(person2 instanceof Person);
console.log('');

// constructor property set to constructor function
console.log(person1.constructor === Person);
console.log(person2.constructor === Person);
console.log('');

function Person (name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}

var person1 = new Person('Brian');
var person2 = new Person('Jon');

console.log('person1.name', person1.name);
console.log('person2.name', person2.name);
person1.sayName();
person2.sayName();
console.log('');


// use Object.defineProperty() inside object constructor
function Person (name) {
  Object.defineProperty(this, 'name', {
    get: function () {
      return name;
    },
    set: function (newName) {
      name = newName;
    },
    enumerable: true,
    configurable: true
  });

  this.sayName = function () {
    console.log(this.name);
  };
}

