
var person1 = {
  name: 'Brian',
  age: 34
};

// detecting properties
// unreliable
if (person1.age) {
  // do something with age
}

// more reliable
console.log('name', 'name' in person1);
console.log('age', 'age' in person1);
console.log('title', 'title' in person1);
console.log('');


// can check for functions as properties too
var person1 = {
  name: 'Brian',
  sayName: function () {
    console.log(this.name);
  }
};

console.log('sayName', 'sayName' in person1);
console.log('');

// checking for own properties with `hasOwnProperty()`
var person1 = {
  name: 'Brian',
  sayName: function () {
    console.log(this.name);
  }
};

console.log('name', 'name in person1');
console.log('name', person1.hasOwnProperty('name'));
console.log('toString', 'toString' in person1);
console.log('toString', person1.hasOwnProperty('toString'));
console.log('');

// remove properties
// don't set the value to `null`
// use `delete`
var person1 = {
  name: 'Brian'
};
console.log('name', 'name' in person1);
delete person1.name;
console.log('name', 'name' in person1);
console.log(person1.name);
console.log('');

// Enumeration
var object = {
  foo: 'bar',
  baz: 'bang'
};
var property;
for (property in object) {
  console.log('Name: ' + property);
  console.log('Value: ' + object[property]);
}
console.log('');

var properties = Object.keys(object);
var i, len;
for (i = 0, len = properties.length; i < len; i++) {
  console.log('Name: ' + properties[i]);
  console.log('Value: ' + object[properties[i]]);
}
console.log('');

// use `propertyIsEnumerable()` to check if a property is enumerable
var person1 = {
  name: 'Brian'
};
console.log('name', 'name' in person1);
console.log(person1.propertyIsEnumerable('name'));
console.log('');

var properties = Object.keys(person1);
console.log('length', 'length' in properties);
console.log(properties.propertyIsEnumerable('length'));
console.log('');

// types of properties
var person1 = {
  _name: 'Brian',

  get name () {
    console.log('Reading name');
    return this._name;
  },

  set name(value) {
    console.log('Setting name to %s', value);
    this._name = value;
  }
};

console.log('name', person1.name);
person1.name = 'Jon';
console.log('name', person1.name);
console.log('');

// property attributes
var person1 = {
  name: 'Brian'
};

Object.defineProperty(person1, 'name', {
  enumerable: false
});
console.log('name', 'name' in person1);
console.log('name', person1.propertyIsEnumerable('name'));

var properties = Object.keys(person1);
console.log('properties.length', properties.length);

Object.defineProperty(person1, 'name', {
  configurable: false
});

// try to delete the Property
delete person1.name;
console.log('name', 'name' in person1);
console.log('name', person1.name);

try {
  Object.defineProperty(person1, 'name', {
    configurable: true
  });
} catch (err) {
  console.log('error setting configurable');
}
console.log('');

// object attributes
// Object.preventExtensions()
// Object.seal()
// Object.freeze();
