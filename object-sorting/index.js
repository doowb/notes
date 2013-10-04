var sort = require('./sort-object');

var outOfOrder = {
  'foo': 1,
  'baz': 2,
  'bar': 3
};

console.log('before: ', outOfOrder);

var inOrder = sort(outOfOrder);

console.log('inOrder: ', inOrder);
console.log('after: ', outOfOrder);
