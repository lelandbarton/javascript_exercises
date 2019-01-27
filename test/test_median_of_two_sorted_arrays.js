const findMedian = require('../src/median_of_two_sorted_arrays');
const assert = require('chai').assert;

describe('Median of two sorted arrays tests', function() {
  it('null', () => {
    const median = findMedian(null,null);
    assert.isNull(median);
  });
  it('[1,3] and [2] to 2', function() {
    const median = findMedian(null,null);

    assert.equal(median, 2);
  });
  it('[1,2] and [3,4] to 2.5', function() {

    const median = findMedian(null,null);
    assert.equal(median, 2.5);
  });
});
