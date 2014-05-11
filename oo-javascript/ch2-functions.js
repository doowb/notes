
// Functions are objects that contain a special property [[Call]]


// Function declarations
// declarations are hoisted to the top of the scope
function add (num1, num2) {
  return num1 + num2;
}

// Function expressions
// expressions are not hoisted
var add = function (num1, num2) {
  return num1 + num1;
};


function sayHi () {
  console.log('Hi!');
}
sayHi();

var sayHi2 = sayHi;
sayHi2();
console.log('');

// passing a function as a parameter (sort function)
// default sort converts all values to strings
// so sorting results in incorrect results
var numbers = [1, 5, 8, 4, 7, 10, 2, 6];
numbers.sort(function (first, second) {
  return first -second;
});
console.log('numbers', numbers);
numbers.sort();
console.log('numbers', numbers);
console.log('');

// arguments
function reflect (value) {
  return value;
}

console.log(reflect('Hi!'));
console.log(reflect('H1!', 25));
console.log(reflect.length);

reflect = function () {
  return arguments[0];
};

console.log(reflect('Hi!'));
console.log(reflect('H1!', 25));
console.log(reflect.length);

function sum () {
  var result = 0;
  var i = 0;
  var len = arguments.length;

  while (i < len) {
    result += arguments[i];
    i++;
  }

  return result;
}

console.log(sum(1, 2));
console.log(sum(3, 4, 5, 6));
console.log(sum(50));
console.log(sum());

// no Function overloading
// but can be mimiced by checking the arguments
function sayMessage (message) {
  if (arguments.length === 0) {
    message = 'Default message';
  }
  console.log(message);
}
sayMessage('Hello!');

