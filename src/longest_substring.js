

const findLongestSubstring = (s) => {
  if (!s) return null;
  let longestSubstring = '';
  let charSet = new Set();
   
  for(let i = 0; i < s.length; i++) {
    let searchIndex = i;
    
    while (!charSet.has(s.charAt(searchIndex)) && searchIndex < s.length) {
      charSet.add(s.charAt(searchIndex));
      searchIndex += 1;  
    }

    if (searchIndex + 1 - i > longestSubstring.length) {
      longestSubstring = s.substring(i, searchIndex);
    }
    charSet.clear();
  }

  return longestSubstring;
};


module.exports = findLongestSubstring;
