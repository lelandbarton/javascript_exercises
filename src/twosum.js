
const twosum = (xes,target) => {
  const xesHash = new Map();
  xes.forEach((x,i) => {
    const idxList = xesHash.get(x)
    if (idxList === undefined) {
      xesHash.set(x,[i]);
    } else {
      idxList.push(i);
    }
  });
  const xesSorted = [...xesHash.keys()].sort((a,b) => {
    if (a == b) return 0;
    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
  });
  
  console.log(xesHash)
  for(let i = 0; i < xesSorted.length; i++) {
    let iVal = xesSorted[i];
    for(let j = xesSorted.length-1; j >= 0; j--) {
      let jVal = xesSorted[j];

      if (iVal + jVal === target) {
        if (iVal == jVal) {
          if (xesHash.get(iVal).length > 1) {
            let idxList = xesHash.get(iVal);
            return [ idxList[0], idxList[1]];
          }
        } else {
          return [ xesHash.get(iVal)[0], xesHash.get(jVal)[0] ];
        }
      }
    }
  }

  return null; 
};


module.exports = twosum;
