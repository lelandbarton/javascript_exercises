const longestSubstring = require('../src/longest_substring');
const assert = require('chai').assert;

describe('Longest Substring Tests', function() {

  it('null test', () => {
    const result = longestSubstring(null);
    assert.isNull(result);
  });
  it('abcabcbb -> abc', () => {
    const result = longestSubstring('abcabcbb');
    assert.equal(result, 'abc');
  });

  it('bbbbb -> b', () => {
    const result = longestSubstring('bbbbb');
    assert.equal(result, 'b');
  });

  it('pwwkew -> kew', () => {
    const result = longestSubstring('pwwkew');
    assert.equal(result, 'kew');
  });
});
