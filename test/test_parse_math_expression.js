const parse = require('../src/parse_math_expression');
const assert = require('chai').assert;

describe('Parse Math Expression', function() {
  it('should be 342', () => {
    const l1 = parse('342');
    assert.equal(l1, 342);
  });
});
