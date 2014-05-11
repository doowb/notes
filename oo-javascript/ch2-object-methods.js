
// When a function is added to the a property on an object
// it's referred to as a method

var person = {
  name: 'Brian',
  sayName: function () {
    console.log(person.name);
  }
};

person.sayName();

// `this` is a reference to the calling object of the function
var person = {
  name: 'Brian',
  sayName: function () {
    console.log(this.name);
  }
};

person.sayName();

// reuse the function
function sayNameForAll () {
  console.log(this.name);
}

var person1 = {
  name: 'Brian',
  sayName: sayNameForAll
};

var person2 = {
  name: 'Jon',
  sayName: sayNameForAll
};

global.name = 'Michael';

person1.sayName();
person2.sayName();

sayNameForAll();
console.log('');

// Changing `this`

// `call()` method
// Executes the function with the specified `this` value
function sayNameForAll (label) {
  console.log(label + ':' + this.name);
}

var person1 = {
  name: 'Brian'
};

var person2 = {
  name: 'Jon'
};

sayNameForAll.call(global, 'global');
sayNameForAll.call(person1, 'person1');
sayNameForAll.call(person2, 'person2');
console.log('');

// `apply()` method
// Works like `call` execpt it takes `this` and an array of parameters
function sayNameForAll (label) {
  console.log(label + ':' + this.name);
}

var person1 = {
  name: 'Brian'
};

var person2 = {
  name: 'Jon'
};

sayNameForAll.apply(global, ['global']);
sayNameForAll.apply(person1, ['person1']);
sayNameForAll.apply(person2, ['person2']);
console.log('');

// `bind()` method
// Takes `this` and any named parameters are permanently bound
function sayNameForAll (label) {
  console.log(label + ':' + this.name);
}

var person1 = {
  name: 'Brian'
};
var person2 = {
  name: 'Jon'
};

// create a function just for person1
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1('person1');

// create a function just for person2
var sayNameForPerson2 = sayNameForAll.bind(person2, 'person2');
sayNameForPerson2();

// attaching the bound function to an object doesn't change `this`
person2.sayName = sayNameForPerson1;
person2.sayName('person2');
console.log('');


