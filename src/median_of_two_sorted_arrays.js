


const findMedian = (xes, yes) => {
  if (!xes) return null;
  if (!yes) return null;

  const totalLength = xes.length + yes.length;
  let median = null;
  let x_p = 0;
  let y_p = 0;

  while (median == null) {
    if (xes[x_p] <= yes[y_p]) {
      xes += 1;
    } else {
      yes += 1;
    }
  }
  


  
  return null;
}


module.exports = findMedian;
