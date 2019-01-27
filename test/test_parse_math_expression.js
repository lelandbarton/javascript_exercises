const parseMath = require('../src/parse_math_expression');
const assert = require('chai').assert;

describe('Parse Math Expression', function() {
  it('should be 342', () => {
    const l1 = parse('342');
    assert.equal(l1, 342);
  });
  it('should return null when no match is available', function() {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const result = addTwoNumbers(l1,l2)

    assert.equal(result.sum(), '807');
  });
  it('should return [1,3]', function() {

  });
});
