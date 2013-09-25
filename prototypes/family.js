require('../utils');

// create a grandparent with a first_name and dbo
var GrandParent = function(first_name, last_name, dob) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.dob = dob;
};


// create a full_name method
GrandParent.method('full_name', function() { return this.first_name + (this.last_name ? ' ' + this.last_name : '') });
// create an age method
GrandParent.method('age', function() { return (new Date()).getFullYear() - (this.dob ? this.dob.getFullYear() : (new Date()).getFullYear()); });

// create a new grand parent object
var grandma = new GrandParent('Doris', 'Johnson', (new Date(1927, 6, 26)));
console.log(grandma.full_name() + ' is ' + grandma.age() + ' years old.');

// create mom instance that overrides the last_name field on the grandma instance
var mom = Object.create(grandma);
mom.first_name = 'Rebecca';
mom.last_name = 'Woodward';
mom.dob = new Date(1957, 4, 21);
console.log(mom.full_name() + ' is ' + mom.age() + ' years old.');

// create the child object from an instance of the parent object
var child = Object.create(mom);
child.first_name = 'Brian';
child.dob = new Date(1979, 9, 7);
console.log(child.full_name() + ' is ' + child.age() + ' years old.');

// remove the last_name property from the mom Parent instance to see what happens
// to the child's last_name property
delete mom.last_name;
console.log();
console.log(child.full_name() + ' is ' + child.age() + ' years old.');
console.log(mom.full_name() + ' is ' + mom.age() + ' years old.');
console.log(grandma.full_name() + ' is ' + grandma.age() + ' years old.');