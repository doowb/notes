var Promise = require('bluebird');

var promise = new Promise(function (resolve) {
  resolve();
});

console.log('running when a is not defined');

(function () {
  promise.then(function () {
    return a.b.c.d();
  }).catch(TypeError, function (e) {
    console.error('TypeError', e);
  }).catch(ReferenceError, function (e) {
    console.error('ReferenceError', e);
  }).catch(function (e) {
    console.log('generic error', e);
  });
})();

console.log('running when a is defined');

(function () {
  var a = {};

  promise.then(function () {
    return a.b.c.d();
  }).catch(TypeError, function (e) {
    console.error('TypeError', e);
  }).catch(ReferenceError, function (e) {
    console.error('ReferenceError', e);
  }).catch(function (e) {
    console.log('generic error', e);
  });
})();


console.log('running when d throws an error');

(function () {
  var a = {
    b: {
      c: {
        d: function () {
          throw new Error('Error from d()');
        }
      }
    }
  };

  promise.then(function () {
    return a.b.c.d();
  }).catch(TypeError, function (e) {
    console.error('TypeError', e);
  }).catch(ReferenceError, function (e) {
    console.error('ReferenceError', e);
  }).catch(function (e) {
    console.log('generic error', e);
  });
})();
