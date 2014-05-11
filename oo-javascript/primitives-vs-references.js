
// primitives
var var1 = 'red';
var var2 = var1;

console.log('var1', var1);
console.log('var2', var2);
console.log('');

var1 = 'blue';

console.log('var1', var1);
console.log('var2', var2);
console.log('');


// references
var object1 = {};
var object2 = object1;

object1.myCustomerProperty = "Awesome!";

console.log('object1', object1.myCustomerProperty);
console.log('object2', object2.myCustomerProperty);
console.log('');
