const twosum = require('../src/twosum');
const assert = require('chai').assert;

describe('Two Sum Tests', function() {
  it('should return null when no match is available', function() {
    const result = twosum([1,2],4);

    assert.isNull(result);
  });
  it('should return [1,3]', function() {
    const result = twosum([4,3,5,1,2],4);

    assert.isNotNull(result);
  });
});
