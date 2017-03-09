var assert = require('assert');
var ponsify = require('../dist/script.min.js');
var startPonsify = require('../src/main.js');

testPonsify();

function testPonsify() {
  // startPonsify(2,500,7);                                                       //send parameters to function (lower,limit,step);

      one();
      two();
      three();
      function one() {
        assert.equal(startPonsify(1, 10, 1,1));
        assert.equal(startPonsify(2, 12, 3,2));
        assert.equal(startPonsify(3, 9, 3,3));
      }


      function two() {
        assert.equal(startPonsify(3, 3, 3,4));
        assert.equal(startPonsify(2, 2, 1,5));
        assert.equal(startPonsify(1, 1, 4,6));
      }

      function three() {
        assert.equal(startPonsify(4, 3, 2,7));

      }

}
