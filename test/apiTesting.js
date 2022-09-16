const assert = require('assert');

describe('Array', function () {
 describe('#index0f()', function () {
   it('should return -1 when the value is not present', function() {
    assert.equat([1, 2, 3].indexof(2), 1);
   });
 });
});