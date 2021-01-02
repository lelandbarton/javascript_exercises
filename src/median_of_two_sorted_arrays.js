


const findMedian = (xes, yes) => {
  if (!xes) return null;
  if (!yes) return null;

  const totalLength = xes.length + yes.length;
  const isMedian2 = totalLength % 2  === 1;
  const medianPosition = Math.floor(totalLength/2);
  const medians = [];
  let index = 0;
  let x_p = 0;
  let y_p = 0;

  while (medians.length === 0 || medianPosition + 1) {
    if (xes[x_p] <= yes[y_p]) {
      xes += 1;
    } else {
      yes += 1;
    }
  }
  


  
  return null;
}


module.exports = findMedian;
