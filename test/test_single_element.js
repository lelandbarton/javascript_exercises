const single = require('../src/single_element');
const assert = require('chai').assert;

describe('Single Element Tests', function() {
  it('Should return null when condition is not met', function() {
    const result = single([1,2],4);

    assert.isNull(result);
  });
  it('should return [1,3]', function() {
    const result = twosum([4,3,5,1,2],4);

    assert.isNotNull(result);
  });
});
